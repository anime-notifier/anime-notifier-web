// Start websocket
const io = require('socket.io-client');
const socket = io(process.env.REACT_APP_BACKEND_SERVER);

exports.setupWebsocket = () => {
  // Setup route
  require('websocket/routes')(socket);
}

exports.socket = socket;
