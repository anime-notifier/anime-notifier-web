import { socket } from 'websocket';

export function login(email, password) {
  socket.emit('user', {type: "login", email, password});
}

export function logout() {
  socket.emit('user', {type: "logout"});
}

exports.checkSession = () => {
  socket.emit('user', {type: "checkSession"});
}

exports.getMyUserData = () => {
  socket.emit('user', {type: "getMyUserData"});
}
