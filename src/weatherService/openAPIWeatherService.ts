import axios from 'axios'
import {getUpstreamAPIUrlByLocation,
     getConfig, logger, } from '../common/utils';
import * as _ from 'lodash';
import {getCacheWeatherForecastByLocationAndDate} from '../cache'
import moment from 'moment-timezone';

export const getWeatherByLocationService =async(location:string):Promise<any> =>{
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
       return Promise.resolve(await axios.get(opts.url, opts))
    }catch(err){
        logger.error(`getWeatherByLocationAndWeekday: error occurred from upstream service for arguments: ${location}`)
        throw Promise.reject(err)
    }
}

export const getWeatherByLocationAndWeekdayService = async(location:string, weekday:string):Promise<any>=>{
    try{
        const locationForeCast = await getCacheWeatherForecastByLocationAndDate(location,weekday);
        return Promise.resolve(locationForeCast);
    }
    catch(err){
        logger.error(`getWeatherByLocationAndWeekdayerror occurred while fetching forecast data for today for location ${location}`);
        return Promise.reject()
    }
}

export const getWeatherByLocationTodayService = async(location:string):Promise<any>=>{
    const weekday=moment().format('dddd').toLowerCase();
    try{
        return Promise.resolve(await getCacheWeatherForecastByLocationAndDate(location,weekday))
    }
    catch(err){
        logger.error(`error occurred: ${err}`)
        return Promise.reject(err)
    }
}