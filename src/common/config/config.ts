
export const getConfig = (key:string) =>{
    switch (key){
        case 'node_env': return process.env['NODE_ENV']||'local';
        case 'loglevel': return process.env['LOGLEVEL']||'debug';
        case 'upstreamBaseUrl': return process.env['upstreamBaseUrl']||'';
        case 'apikey': return process.env['apikey']||'';
        case 'apisecret': return process.env['apisecret']||'';
        case 'weatherAPIKey': return process.env['weatherAPIKey']||'';
        default:
            return '';
    }
}