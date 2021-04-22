import axios from 'axios'
import {getUpstreamAPIUrlByLocation,
    getUpstreamAPIUrlByLocationAndDay,
    getUpstreamAPIUrlByLocationAndToday} from 'util';
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

    if (_.IsNil(weekday)||(!DaysOfWeek.contains(weekday))){
        logger.Errorf(`getWeatherByLocation: invalid weekday`);
        return;
    }
}

const getWeatherByLocationToday = (location:string)=>{
     
}