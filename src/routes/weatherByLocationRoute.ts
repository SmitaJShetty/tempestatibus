import {getWeatherByLocation }from '../handlers/openWeatherAPI'

export const weatherByLocationOpts = async(fastify:any)=>{
    const headersJsonSchema = {
        type: 'object',
        properties: {
            'apiKey':{type: 'string'},
            'apiSecret':{type:'string'},
        },
        required: ['apiKey','apiSecret'],
    };
    const paramsJSONSchema = {
        location: {type:'string'},
    }
    const schema={
        headers:headersJsonSchema,  
        params: paramsJSONSchema
    };

    fastify.get('/tempestatibus/v1/:location',{schema},getWeatherByLocation)
}