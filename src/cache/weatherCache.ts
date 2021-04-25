import * as _ from 'lodash';
import cache from 'memory-cache';
import {logger, getConfig, WeekDaysLimit,getUpstreamAPIUrlByLocationAndDay} from '../common/utils';
import moment from 'moment-timezone';
import axios from 'axios';
import { DailyForecastResultValue } from 'handlerTypes';
import {getGeoCoordinates} from './index'

export const checkIfDayOldData = (locationWeather:DailyForecastResultValue):boolean=>{
   if (!moment(locationWeather.fetchDate).isValid()){
       logger.error(`invalid fetchdata stored as value`)
       return true; //stale data, fetch for today
   }

   if (moment().diff(moment(locationWeather.fetchDate),'days')!==0){
       return true
   }

   return false;
}

//get location 
export const getLocationForecastForWeekday = (weekday:string, locationWeather:DailyForecastResultValue):Promise<DailyForecastResultValue>|any=>{
    const forecastData=locationWeather && locationWeather.results;
    if (_.isNil(forecastData)){
        logger.error(`getLocationWeatherForWeekday:forecast data was empty`)
        throw new Error(`forecast data not found`)
    }

    const dayForecast=forecastData.find(f =>{
        return moment.unix(f.dt).tz("Australia/Sydney").format('dddd').toLowerCase()===weekday
    })

    return dayForecast;
}

export const getCacheWeatherForecastByLocationAndDate = async(location:string,weekday:string) =>{
    if (_.isNil(location)|| _.isNil(weekday)){
        logger.error(`weather cache recieved request for empty location or weekday keys`)
    }

    const {lon,lat}=getGeoCoordinates(location);
    const weatherCache=cache;
    const locationWeather=weatherCache.get(lon+'||'+lat);
    if (!_.isNil(locationWeather) && !checkIfDayOldData(locationWeather)){
        return getLocationForecastForWeekday(weekday,locationWeather)
    }
    let dailyForecastData;
    try{
        dailyForecastData = await getLocationWeatherForDays(lon,lat,WeekDaysLimit)
    }
    catch(err){ 
        logger.error(`error: ${err} occurred while fetching location weather forcast for ${WeekDaysLimit} days`)
        throw Promise.reject(err)
    }
    if (_.isNil(dailyForecastData)){
        logger.error(`getWeatherByLocationAndWeekday: forecastdata is empty`)
        return Promise.reject({mesg:"daily forcast data was not found"})
    }

    weatherCache.put(lon+'||'+lat, {fetchDate: moment(), results: dailyForecastData})
    return getLocationForecastForWeekday(weekday,{fetchDate: new Date(), results: dailyForecastData});
}

export const getLocationWeatherForDays = async(lon:number, lat:number, weekdaysLimit:number):Promise<any> =>{
    //make a call to fetch geolocation coordinates
    const url = getUpstreamAPIUrlByLocationAndDay();
    const apikey=getConfig('weatherAPIKey');
    const opts = {
        url,
        baseURL:`https://api.openweathermap.org/data/2.5`,
        params:{
            appid:apikey,
            lon,
            lat,
            cnt:weekdaysLimit,
            exclude:"hourly,minutely,alerts,current"
        }, 
    }
    let response,forecastData;
  
    try{
        response= await axios.get(opts.url, opts); 
        forecastData=response && response.data && response.data.daily;
    }
    catch(err){
        logger.error(`getWeatherByLocationAndWeekday: error ${err} occurred from upstream service for arguments: ${lon},${lat}`)
        return Promise.reject(err)
    }
    console.log(forecastData)
    return forecastData;
}