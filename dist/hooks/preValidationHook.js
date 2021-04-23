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
    console.log(req.headers.apikey);
    console.log(lodash_1.default.get(req, 'headers.apisecret'));
    console.log(config_1.getConfig('apisecret'));
    console.log(config_1.getConfig('apikey'));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlVmFsaWRhdGlvbkhvb2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaG9va3MvcHJlVmFsaWRhdGlvbkhvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0RBQXVCO0FBQ3ZCLDZDQUE2QztBQUM3QywyQ0FBMEM7QUFFbkMsS0FBSyxVQUFVLGFBQWEsQ0FBQyxHQUFPLEVBQUUsSUFBUTtJQUNqRCxJQUFJLGdCQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsc0JBQXNCLENBQUMsRUFBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ04sSUFBSSxFQUFFLEdBQUc7U0FDWixDQUFDLENBQUM7S0FDTjtJQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUE7SUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7SUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUFFaEMsSUFBSSxDQUFDLGdCQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxnQkFBZ0IsQ0FBQyxLQUFHLGtCQUFTLENBQUMsUUFBUSxDQUFDLElBQUksZ0JBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLG1CQUFtQixDQUFDLEtBQUcsa0JBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLGtCQUFTLENBQUMsU0FBUyxDQUFDLEtBQUcsT0FBTyxFQUFFO1FBQ25KLE1BQU0sS0FBSyxHQUFDO1lBQ1IsTUFBTSxFQUFFLGlCQUFTLENBQUMsWUFBWTtZQUM5QixJQUFJLEVBQUUsY0FBYztZQUNwQixPQUFPLEVBQUUscUNBQXFDO1NBQ2pELENBQUE7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFTLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUNuQjtBQUNMLENBQUM7QUF0QkQsc0NBc0JDIn0=