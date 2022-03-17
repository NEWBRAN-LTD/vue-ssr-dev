// This is the production server using uWebSocket.js

const uWS = require('uWebSockets.js')
const port = process.env.PORT || 9001

uWS.
  App({})
  .get('/*', (res, req) => {

    // Here we modified it for our SSR app

    console.log(res)

    res.end('Hello World!');


  }).listen(port, (token) => {
    if (token) {
      console.log('Listening to port ' + port);
    } else {
      console.log('Failed to listen to port ' + port);
    }
  })
