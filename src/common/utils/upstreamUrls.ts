
export const getUpstreamAPIUrlByLocation =(location:string) => `/weather/${location}`

export const getUpstreamAPIUrlByLocationAndDay =(location:string, weekday:string) => `/weather/${location}/:${weekday}`

export const getUpstreamAPIUrlByLocationAndToday =(location:string) => `/weather/${location}/today`