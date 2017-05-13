import { socket } from 'websocket';
import { store } from 'index';

exports.getAnimeList = (userName) => {
  socket.emit('anime', {type: "getList", userName});
}

exports.resetMalAnimeList = () => {
  store.dispatch({
    type: 'RESET_MAL_ANIME_LIST'
  });
}
