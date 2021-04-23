import {getWeatherByLocationToday} from '../handlers'

export const weatherByLocationTodayOpts = async(fastify:any)=>{
    const headersJsonSchema = {
        type: 'object',
        properties: {
            'apiKey':{type: 'string'},
            'apiSecret':{type:'string'},
        },
        required: ['apiKey','apiSecret'],
    };
    const queryStringJSONSchema = {
        location: {type:'string'},
    }
    const schema={
        headers:headersJsonSchema,
        querystring: queryStringJSONSchema
    };
    fastify.get('/tempestatibus/v1/:location/today',{schema},getWeatherByLocationToday)
}