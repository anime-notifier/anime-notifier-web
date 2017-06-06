// Start websocket
import routes from 'websocket/routes';
import io from 'socket.io-client'
const socket = io(process.env.REACT_APP_BACKEND_SERVER);

export function setupWebsocket(){
  // Setup route
  routes(socket);
}

export { socket }
