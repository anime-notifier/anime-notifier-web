import { socket } from 'websocket';

exports.login = (email, password) => {
  socket.emit('user', {type: "login", email, password});
}
exports.register = (name, email, password) => {
  socket.emit('user', {type: "register", name, email, password});
}

exports.logout = () => {
  socket.emit('user', {type: "logout"});
}

exports.checkSession = () => {
  socket.emit('user', {type: "checkSession"});
}

exports.getMyUserData = () => {
  socket.emit('user', {type: "getMyUserData"});
}
