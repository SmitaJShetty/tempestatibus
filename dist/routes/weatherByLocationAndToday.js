"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weatherByLocationTodayOpts = void 0;
const handlers_1 = require("../handlers");
const weatherByLocationTodayOpts = async (fastify) => {
    const headersJsonSchema = {
        type: 'object',
        properties: {
            'apiKey': { type: 'string' },
            'apiSecret': { type: 'string' },
        },
        required: ['apiKey', 'apiSecret'],
    };
    const paramsJSONSchema = {
        location: { type: 'string' },
    };
    const schema = {
        headers: headersJsonSchema,
        params: paramsJSONSchema
    };
    fastify.get('/tempestatibus/v1/:location/today', { schema }, handlers_1.getWeatherByLocationToday);
};
exports.weatherByLocationTodayOpts = weatherByLocationTodayOpts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlckJ5TG9jYXRpb25BbmRUb2RheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvd2VhdGhlckJ5TG9jYXRpb25BbmRUb2RheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwQ0FBcUQ7QUFFOUMsTUFBTSwwQkFBMEIsR0FBRyxLQUFLLEVBQUMsT0FBVyxFQUFDLEVBQUU7SUFDMUQsTUFBTSxpQkFBaUIsR0FBRztRQUN0QixJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRTtZQUNSLFFBQVEsRUFBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDekIsV0FBVyxFQUFDLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQztTQUM5QjtRQUNELFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBQyxXQUFXLENBQUM7S0FDbkMsQ0FBQztJQUNGLE1BQU0sZ0JBQWdCLEdBQUc7UUFDckIsUUFBUSxFQUFFLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQztLQUM1QixDQUFBO0lBQ0QsTUFBTSxNQUFNLEdBQUM7UUFDVCxPQUFPLEVBQUMsaUJBQWlCO1FBQ3pCLE1BQU0sRUFBRSxnQkFBZ0I7S0FDM0IsQ0FBQztJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUMsRUFBQyxNQUFNLEVBQUMsRUFBQyxvQ0FBeUIsQ0FBQyxDQUFBO0FBQ3ZGLENBQUMsQ0FBQTtBQWpCWSxRQUFBLDBCQUEwQiw4QkFpQnRDIn0=