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
const getLocationFromReq = (req) => {
    const location = _.get(req, 'querystring.location');
    if (_.isNil(location)) {
        utils_1.logger.error(`request did not contain location parameter`);
        return;
    }
    return location;
};
exports.getLocationFromReq = getLocationFromReq;
const getWeekdayFromReq = (req) => {
    const weekday = _.get(req, 'querystring.weekday');
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
        utils_1.logger.Errorf(`getWeatherByLocation: invalid location`);
        return;
    }
    const apikey = utils_1.getConfig('weatherAPIKey');
    const opts = {
        url: utils_1.getUpstreamAPIUrlByLocation(location),
        baseUrl: utils_1.getConfig('upstreamBaseUrl'),
        params: {
            apikey,
            q: location
        },
    };
    try {
        const response = await axios_1.default.get(opts.url, opts);
        resp.code(response.status);
        resp.send(response.data);
    }
    catch (err) {
        return Promise.reject(err);
    }
};
exports.getWeatherByLocation = getWeatherByLocation;
const getWeatherByLocationAndWeekday = async (req, resp) => {
    const location = exports.getLocationFromReq(req);
    if (_.isNil(location)) {
        utils_1.logger.Error(`getWeatherByLocationAndWeekday: received invalid location`);
    }
    const weekday = exports.getWeekdayFromReq(req);
    if (_.isNil(weekday)) {
        utils_1.logger.Errorf(`getWeatherByLocationAndWeekday: received invalid weekday`);
        return;
    }
    if (_.isNil(weekday) || (!utils_1.WeekDays.every(wd => wd === weekday.toLowerCase()))) {
        utils_1.logger.Errorf(`getWeatherByLocationAndWeekday: invalid weekday`);
        return;
    }
    const url = utils_1.getUpstreamAPIUrlByLocationAndDay(location, weekday);
    const apikey = utils_1.getConfig('weatherAPIKey');
    const opts = {
        url,
        params: {
            apikey,
            url,
            baseUrl: utils_1.getConfig('upstreamBaseUrl'),
        }
    };
    try {
        const response = await axios_1.default.get(url, opts);
        resp.code(response.status);
        resp.send(response.data);
    }
    catch (err) {
        utils_1.logger.Error(`getWeatherByLocationAndWeekday: error occurred from upstream service for arguments: ${location} and ${weekday}`);
        Promise.reject(err);
    }
};
exports.getWeatherByLocationAndWeekday = getWeatherByLocationAndWeekday;
const getWeatherByLocationToday = async (req, resp) => {
    const location = exports.getLocationFromReq(req);
    if (_.isNil(location)) {
        utils_1.logger.Errorf(`getWeatherByLocation: invalid day`);
        return;
    }
    const url = utils_1.getUpstreamAPIUrlByLocationAndToday(location);
    const apikey = utils_1.getConfig('weatherAPIKey');
    const opts = {
        params: {
            apikey,
            url,
            baseUrl: utils_1.getConfig('upstreamBaseUrl'),
        }
    };
    try {
        const response = await axios_1.default.get(url, opts);
        resp.code(response.status);
        resp.send(response.data);
    }
    catch (err) {
        return Promise.reject(err);
    }
};
exports.getWeatherByLocationToday = getWeatherByLocationToday;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlckhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaGFuZGxlcnMvb3BlbldlYXRoZXJBUEkvd2VhdGhlckhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUF5QjtBQUN6Qiw4Q0FFa0c7QUFDbEcsMENBQTRCO0FBRXJCLE1BQU0sa0JBQWtCLEdBQUMsQ0FBQyxHQUFPLEVBQUUsRUFBRTtJQUN4QyxNQUFNLFFBQVEsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxzQkFBc0IsQ0FBQyxDQUFBO0lBQ2hELElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBQztRQUNsQixjQUFNLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUE7UUFDMUQsT0FBTTtLQUNUO0lBQ0QsT0FBTyxRQUFRLENBQUE7QUFDbkIsQ0FBQyxDQUFBO0FBUFksUUFBQSxrQkFBa0Isc0JBTzlCO0FBRU0sTUFBTSxpQkFBaUIsR0FBQyxDQUFDLEdBQU8sRUFBRSxFQUFFO0lBQ3ZDLE1BQU0sT0FBTyxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLHFCQUFxQixDQUFDLENBQUE7SUFDOUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFDO1FBQ2pCLGNBQU0sQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQTtRQUMxRCxPQUFNO0tBQ1Q7SUFDRCxPQUFPLE9BQU8sQ0FBQTtBQUNsQixDQUFDLENBQUE7QUFQWSxRQUFBLGlCQUFpQixxQkFPN0I7QUFFTSxNQUFNLG9CQUFvQixHQUFFLEtBQUssRUFBQyxHQUFPLEVBQUUsSUFBUSxFQUFlLEVBQUU7SUFDdkUsTUFBTSxRQUFRLEdBQUMsMEJBQWtCLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDdEMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFFB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