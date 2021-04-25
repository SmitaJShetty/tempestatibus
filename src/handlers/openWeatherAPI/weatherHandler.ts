import axios from 'axios'
import {getUpstreamAPIUrlByLocation,
    getUpstreamAPIUrlByLocationAndToday, WeekDays, getConfig, logger, } from '../../common/utils';
import * as _ from 'lodash';
import {httpCodes} from '../../common/utils';
import querystring from 'querystring';
import {getCacheWeatherForecastByLocationAndDate} from '../../cache'

export const getLocationFromReq=(req:any) =>{
    const location=_.get(req,'params.location')
    if (_.isNil(location)){
        logger.error(`request did not contain location parameter`)
        return 
    }
    return location
}

export const getWeekdayFromReq=(req:any) =>{
    const weekday=_.get(req,'params.weekday')
    if (_.isNil(weekday)){
        logger.error(`request did not contain location parameter`)
        return 
    }
    return weekday
}

export const getWeatherByLocation =async(req:any, resp:any):Promise<any> =>{
    const location=getLocationFromReq(req)
    if (_.isNil(location)){
        logger.error(`getWeatherByLocation: invalid location`);
        resp.code(httpCodes.BadRequest)
        return resp.send({msg:'empty location'})
    }

    const apikey=getConfig('weatherAPIKey');
    const opts={
        url:getUpstreamAPIUrlByLocation(location),
        baseURL: getConfig('upstreamBaseUrl'),
        params:{
            appid:apikey,
            q: location
        }
    }

    try{
       const response =await axios.get(opts.url, opts)
       resp.status(response.status)
       resp.send(response.data)
    }catch(err){
        logger.error(`getWeatherByLocationAndWeekday: error occurred from upstream service for arguments: ${location}`)
        throw Promise.reject(err)
    }
}

export const getWeatherByLocationAndWeekday = async(req:any, resp:any):Promise<any>=>{
    const location=getLocationFromReq(req)
    if (_.isNil(location)){
        logger.error(`getWeatherByLocationAndWeekday: received invalid location`)
        resp.code(httpCodes.BadRequest)
        return resp.send({msg:'empty location'})
    }
    const weekday=getWeekdayFromReq(req)
    if (_.isNil(weekday)){
        logger.error(`getWeatherByLocationAndWeekday: received invalid weekday`);
        resp.code(httpCodes.BadRequest)
        return resp.send({msg:'empty weekday'})
    }

    if (_.isNil(weekday)||(_.isNil(WeekDays.find(wd=> wd===weekday.toLowerCase())))){
        logger.error(`getWeatherByLocationAndWeekday: invalid weekday`);
        resp.code(httpCodes.BadRequest)
        return resp.send({msg:'invalid weekday value'})
        return;
    }

    const locationForeCast = getCacheWeatherForecastByLocationAndDate(location,weekday);
    console.log(locationForeCast)
    return locationForeCast;
}

export const getWeatherByLocationToday = async(req:any, resp:any):Promise<any>=>{
    const location = getLocationFromReq(req)

    if (_.isNil(location)){
        logger.error(`getWeatherByLocation: invalid day`);
        resp.code(httpCodes.BadRequest)
        return resp.send({msg:'invalid location'})
    }

    const url = getUpstreamAPIUrlByLocationAndToday();
    const apikey=getConfig('weatherAPIKey');
    const opts = {
        url,
        baseUrl:getConfig('upstreamBaseUrl'),
        querystring:querystring.stringify({
            appid:apikey,
            q: location
        }), 
    }
    let response;
    try{
        response = await axios.get(opts.baseUrl,opts);
        resp.code(response.status)
        resp.send(response.data)
    }
    catch(err){
        return Promise.reject(err)
    }
}