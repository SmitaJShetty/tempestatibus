"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preValidation = void 0;
const lodash_1 = __importDefault(require("lodash"));
const config_1 = require("../common/config");
const utils_1 = require("../common/utils");
async function preValidation(req, resp) {
    if (lodash_1.default.startsWith(req.url, '/monitor/healthcheck')) {
        resp.send({
            code: 200
        });
    }
    if ((lodash_1.default.get(req, 'headers.apikey') !== config_1.getConfig('apikey') || lodash_1.default.get(req, 'headers.apisecret') !== config_1.getConfig('apisecret')) && config_1.getConfig('nodeEnv') !== 'local') {
        const error = {
            status: utils_1.httpCodes.UnAuthorized,
            code: 'UnAuthorized',
            message: 'Invalid apikey or secret in request'
        };
        resp.code(utils_1.httpCodes.UnAuthorized);
        resp.send(error);
    }
}
exports.preValidation = preValidation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlVmFsaWRhdGlvbkhvb2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaG9va3MvcHJlVmFsaWRhdGlvbkhvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0RBQXVCO0FBQ3ZCLDZDQUE2QztBQUM3QywyQ0FBMEM7QUFFbkMsS0FBSyxVQUFVLGFBQWEsQ0FBQyxHQUFPLEVBQUUsSUFBUTtJQUNqRCxJQUFJLGdCQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsc0JBQXNCLENBQUMsRUFBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ04sSUFBSSxFQUFFLEdBQUc7U0FDWixDQUFDLENBQUM7S0FDTjtJQUVELElBQUksQ0FBQyxnQkFBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsZ0JBQWdCLENBQUMsS0FBRyxrQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGdCQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxtQkFBbUIsQ0FBQyxLQUFHLGtCQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxrQkFBUyxDQUFDLFNBQVMsQ0FBQyxLQUFHLE9BQU8sRUFBRTtRQUNuSixNQUFNLEtBQUssR0FBQztZQUNSLE1BQU0sRUFBRSxpQkFBUyxDQUFDLFlBQVk7WUFDOUIsSUFBSSxFQUFFLGNBQWM7WUFDcEIsT0FBTyxFQUFFLHFDQUFxQztTQUNqRCxDQUFBO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDbkI7QUFDTCxDQUFDO0FBakJELHNDQWlCQyJ9