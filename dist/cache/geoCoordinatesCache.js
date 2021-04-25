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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGeoCoordinates = void 0;
const _ = __importStar(require("lodash"));
let geoCoordinateCache = null;
const getGeoCoordinates = (location) => {
    if (_.isNil(geoCoordinateCache)) {
        geoCoordinateCache = populateCache(geoCoordinateCache);
    }
    return geoCoordinateCache.get(location.toLowerCase());
};
exports.getGeoCoordinates = getGeoCoordinates;
const populateCache = (geoCoordMap) => {
    geoCoordMap = new Map();
    geoCoordMap.set("sydney", { lon: 151.2073, lat: -33.8679 });
    geoCoordMap.set("melbourne", { lon: -80.6081, lat: 28.0836 });
    geoCoordMap.set("adelaide", { lon: 138.6, lat: -34.9333 });
    geoCoordMap.set("new york", { lon: -74.006, lat: 40.7143 });
    geoCoordMap.set("darwin", { lon: 130.8418, lat: -12.4611 });
    geoCoordMap.set("perth", { lon: 115.8333, lat: -31.9333 });
    geoCoordMap.set("munich", { lon: 11.5755, lat: 48.1374 });
    geoCoordMap.set("london", { lon: -0.1257, lat: 51.5085 });
    geoCoordMap.set("milan", { lon: 9.1895, lat: 45.4643 });
    geoCoordMap.set("rome", { lon: -85.1647, lat: 34.257 });
    geoCoordMap.set("athens", { lon: 23.7162, lat: 37.9795 });
    geoCoordMap.set("vladivostok", { lon: 131.8735, lat: 43.1056 });
    return geoCoordMap;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvQ29vcmRpbmF0ZXNDYWNoZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWNoZS9nZW9Db29yZGluYXRlc0NhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwQ0FBMkI7QUFFM0IsSUFBSSxrQkFBa0IsR0FBeUIsSUFBSSxDQUFDO0FBRTdDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxRQUFlLEVBQUMsRUFBRTtJQUNoRCxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsRUFBQztRQUM1QixrQkFBa0IsR0FBRSxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtLQUN4RDtJQUVELE9BQU8sa0JBQWtCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFBO0FBQ3pELENBQUMsQ0FBQTtBQU5ZLFFBQUEsaUJBQWlCLHFCQU03QjtBQUVELE1BQU0sYUFBYSxHQUFDLENBQUMsV0FBbUMsRUFBQyxFQUFFO0lBQ3ZELFdBQVcsR0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFBO0lBQ3JCLFdBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUMsR0FBRyxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUMsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQ3hELFdBQVcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUMsR0FBRyxFQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQzFELFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQ3ZELFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUMsR0FBRyxFQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQ3hELFdBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUMsR0FBRyxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUMsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQ3hELFdBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUMsR0FBRyxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUMsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQ3ZELFdBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUMsR0FBRyxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUN0RCxXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFDLEdBQUcsRUFBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUN0RCxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFDcEQsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBQyxHQUFHLEVBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDcEQsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQ3RELFdBQVcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEVBQUMsR0FBRyxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUM1RCxPQUFPLFdBQVcsQ0FBQztBQUN2QixDQUFDLENBQUEifQ==