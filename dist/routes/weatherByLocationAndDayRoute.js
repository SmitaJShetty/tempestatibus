"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weatherByLocationAndWeekdayOpts = void 0;
const handlers_1 = require("../handlers");
const weatherByLocationAndWeekdayOpts = async (fastify) => {
    const headersJsonSchema = {
        type: 'object',
        properties: {
            'apiKey': { type: 'string' },
            'apiSecret': { type: 'string' },
        },
        required: ['apiKey', 'apiSecret'],
    };
    const queryStringJSONSchema = {
        location: { type: 'string' },
        weekday: { type: 'string' }
    };
    const schema = {
        headers: headersJsonSchema,
        querystring: queryStringJSONSchema
    };
    fastify.get('/tempestatibus/v1/:location/:weekday', { schema }, handlers_1.getWeatherByLocationAndWeekday);
};
exports.weatherByLocationAndWeekdayOpts = weatherByLocationAndWeekdayOpts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlckJ5TG9jYXRpb25BbmREYXlSb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvd2VhdGhlckJ5TG9jYXRpb25BbmREYXlSb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwQ0FBMkQ7QUFFcEQsTUFBTSwrQkFBK0IsR0FBRyxLQUFLLEVBQUMsT0FBVyxFQUFDLEVBQUU7SUFDL0QsTUFBTSxpQkFBaUIsR0FBRztRQUN0QixJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRTtZQUNSLFFBQVEsRUFBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDekIsV0FBVyxFQUFDLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQztTQUM5QjtRQUNELFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBQyxXQUFXLENBQUM7S0FDbkMsQ0FBQztJQUNGLE1BQU0scUJBQXFCLEdBQUc7UUFDMUIsUUFBUSxFQUFFLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQztRQUN6QixPQUFPLEVBQUUsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDO0tBQzNCLENBQUE7SUFDRCxNQUFNLE1BQU0sR0FBQztRQUNULE9BQU8sRUFBQyxpQkFBaUI7UUFDekIsV0FBVyxFQUFFLHFCQUFxQjtLQUNyQyxDQUFDO0lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsRUFBQyxFQUFDLE1BQU0sRUFBQyxFQUFDLHlDQUE4QixDQUFDLENBQUE7QUFDL0YsQ0FBQyxDQUFBO0FBbEJZLFFBQUEsK0JBQStCLG1DQWtCM0MifQ==