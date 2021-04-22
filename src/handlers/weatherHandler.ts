import axios from 'axios'
import {getUpstreamAPIUrlByLocation,
    getUpstreamAPIUrlByLocationAndDay,
    getUpstreamAPIUrlByLocationAndToday, WeekEnds, WeekDays} from '../common/utils';
import * as _ from 'lodash';
import { logger } from '../common/utils';

const getWeatherByLocation =(location:string) =>{
    if (_.IsNil(location)){
        logger.Errorf(`getWeatherByLocation: invalid location`);
        return;
    }

    const url=getUpstreamAPIUrlByLocation(location);
    const 
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