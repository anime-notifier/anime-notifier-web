import { socket } from 'websocket';

exports.getAnimeList = () => {
  socket.emit('anime', {type: "getList"});
}
