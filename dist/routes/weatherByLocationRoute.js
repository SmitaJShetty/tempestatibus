"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weatherByLocationOpts = void 0;
const openWeatherAPI_1 = require("../handlers/openWeatherAPI");
const weatherByLocationOpts = async (fastify) => {
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
    fastify.get('/tempestatibus/v1/:location', { schema }, openWeatherAPI_1.getWeatherByLocation);
};
exports.weatherByLocationOpts = weatherByLocationOpts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlckJ5TG9jYXRpb25Sb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvd2VhdGhlckJ5TG9jYXRpb25Sb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrREFBK0Q7QUFFeEQsTUFBTSxxQkFBcUIsR0FBRyxLQUFLLEVBQUMsT0FBVyxFQUFDLEVBQUU7SUFDckQsTUFBTSxpQkFBaUIsR0FBRztRQUN0QixJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRTtZQUNSLFFBQVEsRUFBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDekIsV0FBVyxFQUFDLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQztTQUM5QjtRQUNELFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBQyxXQUFXLENBQUM7S0FDbkMsQ0FBQztJQUNGLE1BQU0sZ0JBQWdCLEdBQUc7UUFDckIsUUFBUSxFQUFFLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQztLQUM1QixDQUFBO0lBQ0QsTUFBTSxNQUFNLEdBQUM7UUFDVCxPQUFPLEVBQUMsaUJBQWlCO1FBQ3pCLE1BQU0sRUFBRSxnQkFBZ0I7S0FDM0IsQ0FBQztJQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUMsRUFBQyxNQUFNLEVBQUMsRUFBQyxxQ0FBb0IsQ0FBQyxDQUFBO0FBQzVFLENBQUMsQ0FBQTtBQWxCWSxRQUFBLHFCQUFxQix5QkFrQmpDIn0=