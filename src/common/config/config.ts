
export const getConfig = (key:string) =>{
    switch (key){
        case 'upstreamBaseUrl': return process.env['upstreamHostUrl']||'';
        default:
            return '';
    }
}