"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCacheWeatherForecastByLocationAndDate = exports.getLocationForecastForWeekday = exports.checkIfDayOldData = void 0;
const _ = __importStar(require("lodash"));
const memory_cache_1 = __importDefault(require("memory-cache"));
const utils_1 = require("../common/utils");
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const axios_1 = __importDefault(require("axios"));
const index_1 = require("./index");
const checkIfDayOldData = (locationWeather) => {
    if (!moment_timezone_1.default(locationWeather.fetchDate).isValid()) {
        utils_1.logger.error(`invalid fetchdata stored as value`);
        return true;
    }
    if (moment_timezone_1.default().diff(moment_timezone_1.default(locationWeather.fetchDate), 'days') > 0) {
        return true;
    }
    return false;
};
exports.checkIfDayOldData = checkIfDayOldData;
const getLocationForecastForWeekday = (weekday, locationWeather) => {
    const forecastData = locationWeather.results;
    if (_.isNil(forecastData)) {
        utils_1.logger.error(`getLocationWeatherForWeekday:forecast data was empty`);
        throw new Error(`forecast data not found`);
    }
    const dayForecast = forecastData.find(f => {
        console.log(moment_timezone_1.default.unix(f.dt).tz("Australia/Sydney").format('dddd'));
        return moment_timezone_1.default.unix(f.dt).tz("Australia/Sydney").format('dddd').toLowerCase() === weekday;
    });
    console.log(moment_timezone_1.default.unix(dayForecast.dt).format("YYYY-MM-DD HH:mm:ss"));
    return dayForecast;
};
exports.getLocationForecastForWeekday = getLocationForecastForWeekday;
const getCacheWeatherForecastByLocationAndDate = async (location, weekday) => {
    if (_.isNil(location) || _.isNil(weekday)) {
        utils_1.logger.error(`weather cache recieved request for empty location or weekday keys`);
    }
    const { lon, lat } = index_1.getGeoCoordinates(location);
    const weatherCache = memory_cache_1.default;
    const locationWeather = weatherCache.get(lon + '||' + lat);
    if (!_.isNil(locationWeather) && !exports.checkIfDayOldData(locationWeather)) {
        return exports.getLocationForecastForWeekday(weekday, locationWeather);
    }
    let dailyForecastData;
    try {
        dailyForecastData = await getLocationWeatherForDays(lon, lat, utils_1.WeekDaysLimit);
        console.log(dailyForecastData);
    }
    catch (err) {
        utils_1.logger.error(`error: ${err} occurred while fetching location weather forcast for ${utils_1.WeekDaysLimit} days`);
        throw Promise.reject(err);
    }
    if (_.isNil(dailyForecastData)) {
        utils_1.logger.error(`getWeatherByLocationAndWeekday: forecastdata is empty`);
        return Promise.reject({ mesg: "daily forcast data was not found" });
    }
    weatherCache.put(lon + '||' + lat, { fetchDate: moment_timezone_1.default(), results: dailyForecastData });
    return exports.getLocationForecastForWeekday(weekday, { fetchDate: new Date(), results: dailyForecastData });
};
exports.getCacheWeatherForecastByLocationAndDate = getCacheWeatherForecastByLocationAndDate;
const getLocationWeatherForDays = async (lon, lat, weekdaysLimit) => {
    const url = utils_1.getUpstreamAPIUrlByLocationAndDay();
    console.log(2);
    const apikey = utils_1.getConfig('weatherAPIKey');
    const opts = {
        url,
        baseURL: `https://api.openweathermap.org/data/2.5`,
        params: {
            appid: apikey,
            lon,
            lat,
            cnt: weekdaysLimit,
            exclude: "hourly,minutely,alerts,current"
        },
    };
    console.log(opts);
    let response, forecastData;
    try {
        response = await axios_1.default.get(opts.url, opts);
        console.log(response);
        forecastData = response && response.data && response.data.daily;
        console.log(forecastData);
    }
    catch (err) {
        utils_1.logger.error(`getWeatherByLocationAndWeekday: error ${err} occurred from upstream service for arguments: ${location}`);
        return Promise.reject(err);
    }
    return forecastData;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlckNhY2hlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NhY2hlL3dlYXRoZXJDYWNoZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQTRCO0FBQzVCLGdFQUFpQztBQUNqQywyQ0FBbUc7QUFDbkcsc0VBQXFDO0FBQ3JDLGtEQUEwQjtBQUUxQixtQ0FBeUM7QUFFbEMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLGVBQXdDLEVBQVMsRUFBRTtJQUNsRixJQUFJLENBQUMseUJBQU0sQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUM7UUFDN0MsY0FBTSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFBO1FBQ2pELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCxJQUFJLHlCQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMseUJBQU0sQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEVBQUMsTUFBTSxDQUFDLEdBQUMsQ0FBQyxFQUFDO1FBQzFELE9BQU8sSUFBSSxDQUFBO0tBQ2Q7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNoQixDQUFDLENBQUE7QUFYWSxRQUFBLGlCQUFpQixxQkFXN0I7QUFHTSxNQUFNLDZCQUE2QixHQUFHLENBQUMsT0FBYyxFQUFFLGVBQXdDLEVBQXVDLEVBQUU7SUFDM0ksTUFBTSxZQUFZLEdBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztJQUMzQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUM7UUFDdEIsY0FBTSxDQUFDLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFBO1FBQ3BFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQTtLQUM3QztJQUVELE1BQU0sV0FBVyxHQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FB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