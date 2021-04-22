
import fastify from 'fastify';
import logger from 'utils';

const start = () =>{

    const serverAddr=process.env['serverAddress']
    const serverPort=process.env['serverPort']

    console.log(`start of app`)
    const server = fastify({logger})

    try{}
    catch(err){
        logger.fatal(`server listening on address:port: ${serverAddr}:${serverPort}`)
    }
}

start()