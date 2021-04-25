
import fastify, { FastifyInstance } from 'fastify';
import { logger} from './common/utils';
import { preValidation } from './hooks/preValidationHook';
import {weatherByLocationOpts,weatherByLocationAndWeekdayOpts,weatherByLocationTodayOpts} from './routes';
import * as healthcheck from 'fastify-healthcheck';

export const buildServer = ():FastifyInstance =>{
    const server = fastify({logger})
    server.register(weatherByLocationOpts)
    server.register(weatherByLocationTodayOpts)
    server.register(weatherByLocationAndWeekdayOpts)
    server.register(healthcheck.default,{
        healthcheckUrl:'/monitor/healthcheck',
    });
    server.addHook('preValidation',preValidation)
    return server
}
