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
exports.getWeatherByLocationToday = exports.getWeatherByLocationAndWeekday = exports.getWeatherByLocation = exports.getWeekdayFromReq = exports.getLocationFromReq = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("../../common/utils");
const _ = __importStar(require("lodash"));
const utils_2 = require("../../common/utils");
const querystring_1 = __importDefault(require("querystring"));
const cache_1 = require("../../cache");
const getLocationFromReq = (req) => {
    const location = _.get(req, 'params.location');
    if (_.isNil(location)) {
        utils_1.logger.error(`request did not contain location parameter`);
        return;
    }
    return location;
};
exports.getLocationFromReq = getLocationFromReq;
const getWeekdayFromReq = (req) => {
    const weekday = _.get(req, 'params.weekday');
    if (_.isNil(weekday)) {
        utils_1.logger.error(`request did not contain location parameter`);
        return;
    }
    return weekday;
};
exports.getWeekdayFromReq = getWeekdayFromReq;
const getWeatherByLocation = async (req, resp) => {
    const location = exports.getLocationFromReq(req);
    if (_.isNil(location)) {
        utils_1.logger.error(`getWeatherByLocation: invalid location`);
        resp.code(utils_2.httpCodes.BadRequest);
        return resp.send({ msg: 'empty location' });
    }
    const apikey = utils_1.getConfig('weatherAPIKey');
    const opts = {
        url: utils_1.getUpstreamAPIUrlByLocation(location),
        baseURL: utils_1.getConfig('upstreamBaseUrl'),
        params: {
            appid: apikey,
            q: location
        }
    };
    try {
        const response = await axios_1.default.get(opts.url, opts);
        resp.status(response.status);
        resp.send(response.data);
    }
    catch (err) {
        utils_1.logger.error(`getWeatherByLocationAndWeekday: error occurred from upstream service for arguments: ${location}`);
        throw Promise.reject(err);
    }
};
exports.getWeatherByLocation = getWeatherByLocation;
const getWeatherByLocationAndWeekday = async (req, resp) => {
    console.log(1);
    const location = exports.getLocationFromReq(req);
    if (_.isNil(location)) {
        utils_1.logger.error(`getWeatherByLocationAndWeekday: received invalid location`);
        resp.code(utils_2.httpCodes.BadRequest);
        return resp.send({ msg: 'empty location' });
    }
    const weekday = exports.getWeekdayFromReq(req);
    if (_.isNil(weekday)) {
        utils_1.logger.error(`getWeatherByLocationAndWeekday: received invalid weekday`);
        resp.code(utils_2.httpCodes.BadRequest);
        return resp.send({ msg: 'empty weekday' });
    }
    if (_.isNil(weekday) || (_.isNil(utils_1.WeekDays.find(wd => wd === weekday.toLowerCase())))) {
        utils_1.logger.error(`getWeatherByLocationAndWeekday: invalid weekday`);
        resp.code(utils_2.httpCodes.BadRequest);
        return resp.send({ msg: 'invalid weekday value' });
        return;
    }
    const locationForeCast = cache_1.getCacheWeatherForecastByLocationAndDate(location, weekday);
    console.log(locationForeCast);
    return locationForeCast;
};
exports.getWeatherByLocationAndWeekday = getWeatherByLocationAndWeekday;
const getWeatherByLocationToday = async (req, resp) => {
    const location = exports.getLocationFromReq(req);
    if (_.isNil(location)) {
        utils_1.logger.error(`getWeatherByLocation: invalid day`);
        resp.code(utils_2.httpCodes.BadRequest);
        return resp.send({ msg: 'invalid location' });
    }
    const url = utils_1.getUpstreamAPIUrlByLocationAndToday();
    const apikey = utils_1.getConfig('weatherAPIKey');
    const opts = {
        url,
        baseUrl: utils_1.getConfig('upstreamBaseUrl'),
        querystring: querystring_1.default.stringify({
            appid: apikey,
            q: location
        }),
    };
    let response;
    try {
        response = await axios_1.default.get(opts.baseUrl, opts);
        resp.code(response.status);
        resp.send(response.data);
    }
    catch (err) {
        return Promise.reject(err);
    }
};
exports.getWeatherByLocationToday = getWeatherByLocationToday;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlckhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaGFuZGxlcnMvb3BlbldlYXRoZXJBUEkvd2VhdGhlckhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUF5QjtBQUN6Qiw4Q0FDa0c7QUFDbEcsMENBQTRCO0FBQzVCLDhDQUE2QztBQUM3Qyw4REFBc0M7QUFDdEMsdUNBQW9FO0FBRTdELE1BQU0sa0JBQWtCLEdBQUMsQ0FBQyxHQUFPLEVBQUUsRUFBRTtJQUN4QyxNQUFNLFFBQVEsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQzNDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBQztRQUNsQixjQUFNLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUE7UUFDMUQsT0FBTTtLQUNUO0lBQ0QsT0FBTyxRQUFRLENBQUE7QUFDbkIsQ0FBQyxDQUFBO0FBUFksUUFBQSxrQkFBa0Isc0JBTzlCO0FBRU0sTUFBTSxpQkFBaUIsR0FBQyxDQUFDLEdBQU8sRUFBRSxFQUFFO0lBQ3ZDLE1BQU0sT0FBTyxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDekMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFDO1FBQ2pCLGNBQU0sQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQTtRQUMxRCxPQUFNO0tBQ1Q7SUFDRCxPQUFPLE9BQU8sQ0FBQTtBQUNsQixDQUFDLENBQUE7QUFQWSxRQUFBLGlCQUFpQixxQkFPN0I7QUFFTSxNQUFNLG9CQUFvQixHQUFFLEtBQUssRUFBQyxHQUFPLEVBQUUsSUFBUSxFQUFlLEVBQUU7SUFDdkUsTUFBTSxRQUFRLEdBQUMsMEJBQWtCLENBQUMsR0FBRyxDQUFD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