"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = void 0;
const getConfig = (key) => {
    switch (key) {
        case 'nodeEnv': return process.env['NODE_ENV'] || 'local';
        case 'loglevel': return process.env['LOGLEVEL'] || 'debug';
        case 'upstreamBaseUrl': return process.env['upstreamBaseUrl'] || '';
        case 'apikey': return process.env['apikey'] || '';
        case 'apisecret': return process.env['apisecret'] || '';
        case 'weatherAPIKey': return process.env['weatherAPIKey'] || '';
        default:
            return '';
    }
};
exports.getConfig = getConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi9jb25maWcvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNPLE1BQU0sU0FBUyxHQUFHLENBQUMsR0FBVSxFQUFFLEVBQUU7SUFDcEMsUUFBUSxHQUFHLEVBQUM7UUFDUixLQUFLLFNBQVMsQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBRSxPQUFPLENBQUM7UUFDeEQsS0FBSyxVQUFVLENBQUMsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUUsT0FBTyxDQUFDO1FBQ3pELEtBQUssaUJBQWlCLENBQUMsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsSUFBRSxFQUFFLENBQUM7UUFDbEUsS0FBSyxRQUFRLENBQUMsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUUsRUFBRSxDQUFDO1FBQ2hELEtBQUssV0FBVyxDQUFDLENBQUMsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFFLEVBQUUsQ0FBQztRQUN0RCxLQUFLLGVBQWUsQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBRSxFQUFFLENBQUM7UUFDOUQ7WUFDSSxPQUFPLEVBQUUsQ0FBQztLQUNqQjtBQUNMLENBQUMsQ0FBQTtBQVhZLFFBQUEsU0FBUyxhQVdyQiJ9