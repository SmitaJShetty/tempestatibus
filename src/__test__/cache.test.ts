import {checkIfDayOldData, getLocationForecastForWeekday, getLocationWeatherForDays} from '../cache';
import {mockWeatherByLocation, mockWeatherByLocResponse} from './__mocks__';
import {getUpstreamAPIUrlByLocationAndDay,getConfig} from '../common/utils';

import nock from 'nock';
import { httpCodes } from '../common/utils';

describe(`tests cache`,()=>{
    test(`verifies if checkIfDayOldData returns true if fetchdate is invalid`,()=>{
        const d=new Date()
        const mockLocationWeather={fetchDate:null,results:[]}
        const actual= checkIfDayOldData(mockLocationWeather)
        expect(actual).toBe(true)
    })

    test(`verifies if checkIfDayOldData returns true if cache date is in the past`,()=>{
        const d=new Date()
        const mockLocationWeather={fetchDate:(d.setDate(d.getDate()-2)),results:[]}
        const actual= checkIfDayOldData(mockLocationWeather)
        expect(actual).toBe(true)
    })

    test(`verifies if checkIfDayOldData returns true if cache date  `,()=>{
        const d=new Date()
        const mockLocationWeather={fetchDate:new Date(),results:[]}
        const actual= checkIfDayOldData(mockLocationWeather)
        expect(actual).toBe(false)
    })

    test(`verifies if checkIfDayOldData returns true if cache date is in the past`,()=>{
        const d=new Date()
        const mockLocationWeather={fetchDate:(d.setDate(d.getDate()+2)),results:[]}
        const actual= checkIfDayOldData(mockLocationWeather)
        expect(actual).toBe(true)
    })

    test(`verifies if getLocationForecastForWeekday returns weather data`,()=>{
        mockWeatherByLocation.results[0].dt=1619485200;
        const actual= getLocationForecastForWeekday('tuesday',mockWeatherByLocation)
        expect(actual).toBe(mockWeatherByLocation.results[0])
    })

    test(`verifies if getLocationForecastForWeekday does not return weather data`,()=>{
        try{
            getLocationForecastForWeekday('tuesday',null)
        }
        catch(err){
            expect(true).toBe(true)
        }
    })

    test(`verifies getLocationWeatherForDays returns forcast for location`,async()=>{
        const lon=131.8735;
        const lat=43.1056;

        nock(`https://api.openweathermap.org/data/2.5`)
        .get(getUpstreamAPIUrlByLocationAndDay())
        .query({appid:getConfig('weatherAPIKey'),
            lon,
            lat,
            cnt:7,
            exclude:"hourly,minutely,alerts,current"})
        .reply(httpCodes.OK, {daily: mockWeatherByLocation})

        const dailyForcastList= await getLocationWeatherForDays(lon,lat,7);
        expect(typeof dailyForcastList).toBe(typeof mockWeatherByLocation)
    })
})
