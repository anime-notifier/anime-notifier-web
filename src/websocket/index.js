// Start websocket
const io = require('socket.io-client');
const socket = io('localhost:4000');

exports.setupWebsocket = () => {
  // Setup route
  require('websocket/routes')(socket);
}

exports.socket = socket;
