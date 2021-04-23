import _ from "lodash";
import { getConfig } from "../common/config";
import {httpCodes} from '../common/utils';

export async function preValidation(req:any, resp:any) {
    if (_.startsWith(req.url,'/monitor/healthcheck')){
        resp.send({
            code: 200
        });
    }

    console.log(req.headers.apikey)
    console.log(_.get(req,'headers.apisecret'))
    console.log(getConfig('apisecret'))
    console.log(getConfig('apikey'))

    if ((_.get(req,'headers.apikey')!==getConfig('apikey') || _.get(req, 'headers.apisecret')!==getConfig('apisecret')) && getConfig('nodeEnv')!=='local') {
        const error={
            status: httpCodes.UnAuthorized,
            code: 'UnAuthorized',
            message: 'Invalid apikey or secret in request'
        }

        resp.code(httpCodes.UnAuthorized)
        resp.send(error)
    }
}