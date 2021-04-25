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
const cache_1 = require("../../cache");
const moment_timezone_1 = __importDefault(require("moment-timezone"));
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
    try {
        const locationForeCast = await cache_1.getCacheWeatherForecastByLocationAndDate(location, weekday);
        console.log(locationForeCast);
        return Promise.resolve(locationForeCast);
    }
    catch (err) {
        utils_1.logger.error(`getWeatherByLocationAndWeekdayerror occurred while fetching forecast data for today for location ${location}`);
        return Promise.reject();
    }
};
exports.getWeatherByLocationAndWeekday = getWeatherByLocationAndWeekday;
const getWeatherByLocationToday = async (req, resp) => {
    const location = exports.getLocationFromReq(req);
    if (_.isNil(location)) {
        utils_1.logger.error(`getWeatherByLocation: invalid day`);
        resp.code(utils_2.httpCodes.BadRequest);
        return resp.send({ msg: 'invalid location' });
    }
    const weekday = moment_timezone_1.default().format('dddd').toLowerCase();
    let response;
    try {
        response = await cache_1.getCacheWeatherForecastByLocationAndDate(location, weekday);
        resp.code(utils_2.httpCodes.OK);
        resp.send(response);
    }
    catch (err) {
        utils_1.logger.error(`error occurred: ${err}`);
        return Promise.reject(err);
    }
};
exports.getWeatherByLocationToday = getWeatherByLocationToday;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlckhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaGFuZGxlcnMvb3BlbldlYXRoZXJBUEkvd2VhdGhlckhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUF5QjtBQUN6Qiw4Q0FDOEQ7QUFDOUQsMENBQTRCO0FBQzVCLDhDQUE2QztBQUM3Qyx1Q0FBb0U7QUFDcEUsc0VBQXFDO0FBRTlCLE1BQU0sa0JBQWtCLEdBQUMsQ0FBQyxHQUFPLEVBQUUsRUFBRTtJQUN4QyxNQUFNLFFBQVEsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQzNDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBQztRQUNsQixjQUFNLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUE7UUFDMUQsT0FBTTtLQUNUO0lBQ0QsT0FBTyxRQUFRLENBQUE7QUFDbkIsQ0FBQyxDQUFBO0FBUFksUUFBQSxrQkFBa0Isc0JBTzlCO0FBRU0sTUFBTSxpQkFBaUIsR0FBQyxDQUFDLEdBQU8sRUFBRSxFQUFFO0lBQ3ZDLE1BQU0sT0FBTyxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDekMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFDO1FBQ2pCLGNBQU0sQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQTtRQUMxRCxPQUFNO0tBQ1Q7SUFDRCxPQUFPLE9BQU8sQ0FBQTtBQUNsQixDQUFDLENBQUE7QUFQWSxRQUFBLGlCQUFpQixxQkFPN0I7QUFFTSxNQUFNLG9CQUFvQixHQUFFLEtBQUssRUFBQyxHQUFPLEVBQUUsSUFBUSxFQUFlLEVBQUU7SUFDdkUsTUFBTSxRQUFRLEdBQUMsMEJBQWtCLENBQUMsR0FBRyxDQUFD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