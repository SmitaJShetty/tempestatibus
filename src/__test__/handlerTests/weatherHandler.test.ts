import nock from 'nock';
import {buildServer} from '../../app';
import {getConfig} from '../../common/config';
import fastify from 'fastify';
import { doesNotMatch } from 'node:assert';

describe(`weather app handlers should respond to requests and send right statuscodes`,()=>{
    let server=null;
    // beforeEach((done)=>{
    //     done()
    // })
    test(`verifies handler getWeatherByLocation should return response for a successful api request`,async(done)=>{
        const lon=131.8735;
        const lat=43.1056;

        server= await buildServer();
        console.log(process.env["upstreamBaseUrl"])
        nock('https://api.mockapi.org/data/2.5')
        .get('/onecall')
        .query({appid:getConfig('weatherAPIKey'),
            lon,
            lat,
            cnt:7,
            exclude:"hourly,minutely,alerts,current"})
        .reply(200)

        try{
            const actual= await server.inject({
                method:"GET",
                url: "/tempestatibus/v1/vladivostok" //no apikey, secret
            })

            expect(actual.statusCode).toBe(401)
        }catch(err){
            console.log(err)
            expect(true).toBe(false);
        }finally{
            await server.close();
            done()
        }
    })
    // afterEach(async(done)=>{
    //     await server.close();
    //     done()
    // })
  
})