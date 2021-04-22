
export const getConfig = (key:string) =>{
    switch (key){
        case 'upstreamBaseUrl': return process.env['upstreamHostUrl']||'';
        case 'apikey': return process.env['apikey']||'';
        default:
            return '';
    }
}