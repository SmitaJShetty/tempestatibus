import pino from 'pino';
import {getConfig} from '../config'

const options = {
    name: 'Tempestatibus weather app',
    level: getConfig('loglevel'),
    prettyPrint: {colorize: true, levelFirst:true},
    prettifier: require('pino-pretty'),
}
export const logger = pino(options)