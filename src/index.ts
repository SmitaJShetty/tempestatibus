
import { logger} from './common/utils';
import { buildServer } from './app';

const start = async() =>{
    const serverAddr=process.env['serverAddress']||"0.0.0.0";
    const serverPort=process.env['serverPort']||"3000";
    try{
        const server = buildServer()
        await server.listen(serverPort, serverAddr)
        logger.info(`server listening on address:port: ${serverAddr}:${serverPort}`)
    }
    catch(err){
        logger.fatal(`error occurred: ${err}`)
    }
}

start() 