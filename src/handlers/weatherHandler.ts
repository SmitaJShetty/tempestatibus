import axios from 'axios'
import {getUpstreamAPIUrlByLocation,
    getUpstreamAPIUrlByLocationAndDay,
    getUpstreamAPIUrlByLocationAndToday, WeekEnds, WeekDays} from '../common/utils';
import * as _ from 'lodash';
import { logger } from '../common/utils';
import {getConfig} from '../common/utils';

const getWeatherByLocation =async(location:string) =>{
    if (_.IsNil(location)){
        logger.Errorf(`getWeatherByLocation: invalid location`);
        return;
    }

    const apikey=getConfig('upstreamBaseUrl');
    const opts={
        url:getUpstreamAPIUrlByLocation(location),
        baseUrl: getConfig('upstreamBaseUrl'),
        params:{
            apikey,
            q: location
        },  
        responseType:JSON
    }

    let response="";
    try{
       response =await axios.get(url, opts) as Promise<WeatherByLocationResponse>;
    }catch(err){
        Promise.reject(err)
    }
    return Promise.resolve()
}

const getWeatherByLocationAndDay= (location:string, weekday:string)=>{
    if (_.IsNil(location)){
        logger.Errorf(`getWeatherByLocation: invalid location`);
        return;
    }

    if (_.IsNil(weekday)||(!WeekDays.contains(weekday.toLowerCase()))){
        logger.Errorf(`getWeatherByLocation: invalid weekday`);
        return;
    }

    const url = getUpstreamAPIUrlByLocationAndDay(location, weekday);
    try{

    }
    catch(err){

    }

}

const getWeatherByLocationToday = (today:string)=>{
    if (_.IsNil(today)){
        logger.Errorf(`getWeatherByLocation: invalid day`);
        return;
    }

    const url=getUpstreamAPIUrlByLocationAndToday()
}