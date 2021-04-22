import {getConfig} from '../config/config';

export const getUpstreamAPIUrlByLocation =(location:string) => `${getConfig('upstreamBaseUrl')}/weather/${location}`

export const getUpstreamAPIUrlByLocationAndDay =(location:string, weekday:string) => `${getConfig('upstreamBaseUrl')}/weather/${location}/:${weekday}`

export const getUpstreamAPIUrlByLocationAndToday =(location:string) => `${getConfig('upstreamBaseUrl')}/weather/${location}/today`