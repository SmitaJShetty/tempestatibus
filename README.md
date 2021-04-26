# tempestatibus

*Summary*
A simple application that fetches weather forecasts and other data. Written in nodejs , it uses a third party api - OpenWeatherAPI, to service weather data. Uses a simple in memory caching mechanism that invalidates and replenishes data every day. Also contains one handler that does not use cache. 
The repo contains a makefile (not used for deployment and only for dev/test purposes). 

*Installation and execution*
Application can be cloned locally and executed by using the `npm run build` and `npm run start` commands. Alternative to this is available is the makefile's `make nst` command. Tests are run using `npm run test`. 

You will need a .env file containing environment variables.

```
upstreamBaseUrl=http://api.openweathermap.org/data/2.5
weatherAPIKey=<open api key here>
serverAddr=0.0.0.0 
serverPort=3000
apikey=api
apisecret=secret
```

*Notes*
Application is written in typescript, javascript. Uses jest, nock, fastify-test for unit tests. No deployment files are coded at the moment. Also many more tests can be incorporated. Incorporation of mocks and handler invocations are incorporated in tests that are written. 

