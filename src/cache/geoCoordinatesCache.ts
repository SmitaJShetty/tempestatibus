
import * as _ from 'lodash'

let geoCoordinateCache:Map<string,coordinates>=null;

export const getGeoCoordinates = (location:string)=>{
    if (_.isNil(geoCoordinateCache)){
        geoCoordinateCache= populateCache(geoCoordinateCache)
    }
    
    return geoCoordinateCache.get(location.toLowerCase())
}

const populateCache=(geoCoordMap:Map<string,coordinates>)=>{
    geoCoordMap=new Map()
    geoCoordMap.set("sydney", {lon:151.2073, lat:-33.8679});
    geoCoordMap.set("melbourne", {lon:-80.6081, lat:28.0836});
    geoCoordMap.set("adelaide", {lon:138.6, lat:-34.9333});
    geoCoordMap.set("new york", {lon:-74.006, lat:40.7143});
    geoCoordMap.set("darwin", {lon:130.8418, lat:-12.4611});
    geoCoordMap.set("perth", {lon:115.8333, lat:-31.9333});
    geoCoordMap.set("munich", {lon:11.5755, lat:48.1374});
    geoCoordMap.set("london", {lon:-0.1257, lat:51.5085});
    geoCoordMap.set("milan", {lon:9.1895, lat:45.4643});   
    geoCoordMap.set("rome", {lon:-85.1647, lat:34.257});
    geoCoordMap.set("athens", {lon:23.7162, lat:37.9795});
    geoCoordMap.set("vladivostok", {lon:131.8735, lat:43.1056});
    return geoCoordMap;
}

export interface coordinates {
    lon:number,
    lat:number
}