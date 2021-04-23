import axios from 'axios'
import {getUpstreamAPIUrlByLocation,
    getUpstreamAPIUrlByLocationAndDay,
    getUpstreamAPIUrlByLocationAndToday, WeekDays, getConfig, logger, } from '../../common/utils';
import * as _ from 'lodash';

export const getLocationFromReq=(req:any) =>{
    const location=_.get(req,'querystring.location')
    if (_.isNil(location)){
        logger.error(`request did not contain location parameter`)
        return 
    }
    return location
}

export const getWeekdayFromReq=(req:any) =>{
    const weekday=_.get(req,'querystring.weekday')
    if (_.isNil(weekday)){
        logger.error(`request did not contain location parameter`)
        return 
    }
    return weekday
}

export const getWeatherByLocation =async(req:any, resp:any):Promise<any> =>{
    const location=getLocationFromReq(req)
    if (_.isNil(location)){
        logger.Errorf(`getWeatherByLocation: invalid location`);
        return;
    }

    const apikey=getConfig('weatherAPIKey');
    const opts={
        url:getUpstreamAPIUrlByLocation(location),
        baseUrl: getConfig('upstreamBaseUrl'),
        params:{
            apikey,
            q: location
        },  
    }

    try{
       const response =await axios.get(opts.url, opts)
       resp.code(response.status)
       resp.send(response.data)
    }catch(err){
        return Promise.reject(err)
    }
}

export const getWeatherByLocationAndWeekday = async(req:any, resp:any):Promise<any>=>{
    const location=getLocationFromReq(req)
    if (_.isNil(location)){
        logger.Error(`getWeatherByLocationAndWeekday: received invalid location`)
    }
    const weekday=getWeekdayFromReq(req)
    if (_.isNil(weekday)){
        logger.Errorf(`getWeatherByLocationAndWeekday: received invalid weekday`);
        return;
    }

    if (_.isNil(weekday)||(!WeekDays.every(wd=> wd===weekday.toLowerCase()))){
        logger.Errorf(`getWeatherByLocationAndWeekday: invalid weekday`);
        return;
    }

    const url = getUpstreamAPIUrlByLocationAndDay(location, weekday);
    const apikey=getConfig('weatherAPIKey');
    const opts = {
        url,
        params:{
            apikey,
            url,
            baseUrl:getConfig('upstreamBaseUrl'),
        }
    }
    try{
        const response = await axios.get(url, opts);
        resp.code(response.status)
        resp.send(response.data)
    }
    catch(err){
        logger.Error(`getWeatherByLocationAndWeekday: error occurred from upstream service for arguments: ${location} and ${weekday}`)
        Promise.reject(err)
    }
}

export const getWeatherByLocationToday = async(req:any, resp:any):Promise<any>=>{
    const location = getLocationFromReq(req)

    if (_.isNil(location)){
        logger.Errorf(`getWeatherByLocation: invalid day`);
        return;
    }

    const url = getUpstreamAPIUrlByLocationAndToday(location);
    const apikey=getConfig('weatherAPIKey');
    const opts = {
        params:{
            apikey,
            url,
            baseUrl:getConfig('upstreamBaseUrl'),
        }
    }
    try{
        const response = await axios.get(url,opts);
        resp.code(response.status)
        resp.send(response.data)
    }
    catch(err){
        return Promise.reject(err)
    }
}