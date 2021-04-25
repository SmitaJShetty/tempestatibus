import {WeekDays, logger, } from '../common/utils';
import * as _ from 'lodash';
import {httpCodes} from '../common/utils';
import {getWeatherByLocationTodayService, 
    getWeatherByLocationService,
    getWeatherByLocationAndWeekdayService} from '../weatherService';

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

    try{
       const response =await getWeatherByLocationService(location);
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
    }

    try{
        const locationForeCast = await getWeatherByLocationAndWeekdayService(location, weekday);
        resp.code(httpCodes.OK)
        resp.send(locationForeCast);
    }
    catch(err){
        logger.error(`getWeatherByLocationAndWeekdayerror occurred while fetching forecast data for today for location ${location}`);
        resp.code(httpCodes.InternalServerError);
        resp.send(Promise.reject(err))
    }
}

export const getWeatherByLocationToday = async(req:any, resp:any):Promise<any>=>{
    const location = getLocationFromReq(req)

    if (_.isNil(location)){
        logger.error(`getWeatherByLocation: invalid day`);
        resp.code(httpCodes.BadRequest)
        return resp.send({msg:'invalid location'})
    }

    let response;
    try{
        response = await getWeatherByLocationTodayService(location)
        resp.code(httpCodes.OK)
        resp.send(response)
    }
    catch(err){
        logger.error(`error occurred: ${err}`)
        resp.code(httpCodes.InternalServerError)
        resp.send(Promise.reject(err))
    }
}