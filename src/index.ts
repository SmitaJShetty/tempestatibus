
import fastify from 'fastify';
import { logger} from './common/utils';
import { preValidation } from './hooks/preValidationHook';
import {weatherByLocationOpts,weatherByLocationAndWeekdayOpts,weatherByLocationTodayOpts} from './routes';
import * as healthcheck from 'fastify-healthcheck';

const start = async() =>{

    const serverAddr=process.env['serverAddress']||"0.0.0.0";
    const serverPort=process.env['serverPort']||"3000";
    try{
        const server = fastify({logger})
        server.register(weatherByLocationOpts)
        server.register(weatherByLocationTodayOpts)
        server.register(weatherByLocationAndWeekdayOpts)
        server.register(healthcheck.default,{
            healthcheckUrl:'/monitor/healthcheck',
        });
        server.addHook('preValidation',preValidation)

        await server.listen(serverPort, serverAddr)
        logger.info(`server listening on address:port: ${serverAddr}:${serverPort}`)
    }
    catch(err){
        logger.fatal(`error occurred: ${err}`)
    }
}

start()