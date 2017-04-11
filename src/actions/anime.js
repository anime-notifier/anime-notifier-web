import { socket } from 'websocket';

exports.getAnimeList = (userName) => {
  socket.emit('anime', {type: "getList", userName});
}
