import {getWeatherByLocationAndWeekday} from '../handlers';

export const weatherByLocationAndWeekdayOpts = async(fastify:any)=>{
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
        weekday: {type:'string'}
    }
    const schema={
        headers:headersJsonSchema,
        querystring: queryStringJSONSchema
    };
    fastify.get('/tempestatibus/v1/:location/:weekday',{schema},getWeatherByLocationAndWeekday)
}