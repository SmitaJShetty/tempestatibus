import axios from 'axios'
import {getUpstreamAPIUrlByLocation,
     WeekDays, getConfig, logger, } from '../../common/utils';
import * as _ from 'lodash';
import {httpCodes} from '../../common/utils';
import {getCacheWeatherForecastByLocationAndDate} from '../../cache'
import moment from 'moment-timezone';

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

    try{
        const locationForeCast = await getCacheWeatherForecastByLocationAndDate(location,weekday);
        console.log(locationForeCast)
        return Promise.resolve(locationForeCast);
    }
    catch(err){
        logger.error(`getWeatherByLocationAndWeekdayerror occurred while fetching forecast data for today for location ${location}`);
        return Promise.reject()
    }
    
    
}

export const getWeatherByLocationToday = async(req:any, resp:any):Promise<any>=>{
    const location = getLocationFromReq(req)

    if (_.isNil(location)){
        logger.error(`getWeatherByLocation: invalid day`);
        resp.code(httpCodes.BadRequest)
        return resp.send({msg:'invalid location'})
    }

    const weekday=moment().format('dddd').toLowerCase();
    let response;
    try{
        response = await getCacheWeatherForecastByLocationAndDate(location,weekday)
        resp.code(httpCodes.OK)
        resp.send(response)
    }
    catch(err){
        logger.error(`error occurred: ${err}`)
        return Promise.reject(err)
    }
}