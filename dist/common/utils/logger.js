"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const pino_1 = __importDefault(require("pino"));
const config_1 = require("../config");
const options = {
    name: 'Tempestatibus weather app',
    level: config_1.getConfig('loglevel'),
    prettyPrint: { colorize: true, levelFirst: true },
    prettifier: require('pino-pretty'),
};
exports.logger = pino_1.default(options);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi91dGlscy9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0RBQXdCO0FBQ3hCLHNDQUFtQztBQUVuQyxNQUFNLE9BQU8sR0FBRztJQUNaLElBQUksRUFBRSwyQkFBMkI7SUFDakMsS0FBSyxFQUFFLGtCQUFTLENBQUMsVUFBVSxDQUFDO0lBQzVCLFdBQVcsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDLElBQUksRUFBQztJQUM5QyxVQUFVLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQztDQUNyQyxDQUFBO0FBQ1ksUUFBQSxNQUFNLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBIn0=