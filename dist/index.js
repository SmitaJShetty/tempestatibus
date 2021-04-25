"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const utils_1 = require("./common/utils");
const preValidationHook_1 = require("./hooks/preValidationHook");
const routes_1 = require("./routes");
const healthcheck = __importStar(require("fastify-healthcheck"));
const start = async () => {
    const serverAddr = process.env['serverAddress'] || "0.0.0.0";
    const serverPort = process.env['serverPort'] || "3000";
    try {
        const server = fastify_1.default({ logger: utils_1.logger });
        server.register(routes_1.weatherByLocationOpts);
        server.register(routes_1.weatherByLocationTodayOpts);
        server.register(routes_1.weatherByLocationAndWeekdayOpts);
        server.register(healthcheck.default, {
            healthcheckUrl: '/monitor/healthcheck',
        });
        server.addHook('preValidation', preValidationHook_1.preValidation);
        await server.listen(serverPort, serverAddr);
        utils_1.logger.info(`server listening on address:port: ${serverAddr}:${serverPort}`);
    }
    catch (err) {
        utils_1.logger.fatal(`error occurred: ${err}`);
    }
};
start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0RBQThCO0FBQzlCLDBDQUF1QztBQUN2QyxpRUFBMEQ7QUFDMUQscUNBQTBHO0FBQzFHLGlFQUFtRDtBQUVuRCxNQUFNLEtBQUssR0FBRyxLQUFLLElBQUcsRUFBRTtJQUVwQixNQUFNLFVBQVUsR0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFFLFNBQVMsQ0FBQztJQUN6RCxNQUFNLFVBQVUsR0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFFLE1BQU0sQ0FBQztJQUNuRCxJQUFHO1FBQ0MsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxFQUFDLE1BQU0sRUFBTixjQUFNLEVBQUMsQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxRQUFRLENBQUMsOEJBQXFCLENBQUMsQ0FBQTtRQUN0QyxNQUFNLENBQUMsUUFBUSxDQUFDLG1DQUEwQixDQUFDLENBQUE7UUFDM0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyx3Q0FBK0IsQ0FBQyxDQUFBO1FBQ2hELE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBQztZQUNoQyxjQUFjLEVBQUMsc0JBQXNCO1NBQ3hDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFDLGlDQUFhLENBQUMsQ0FBQTtRQUU3QyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFBO1FBQzNDLGNBQU0sQ0FBQyxJQUFJLENBQUMscUNBQXFDLFVBQVUsSUFBSSxVQUFVLEVBQUUsQ0FBQyxDQUFBO0tBQy9FO0lBQ0QsT0FBTSxHQUFHLEVBQUM7UUFDTixjQUFNLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQyxDQUFBO0tBQ3pDO0FBQ0wsQ0FBQyxDQUFBO0FBRUQsS0FBSyxFQUFFLENBQUEifQ==