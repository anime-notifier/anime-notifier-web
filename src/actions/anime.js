import { socket } from 'websocket';
import { store } from 'index';

exports.getAnimeStatus = (provider, userName) => {
  socket.emit('anime', {type: "getList", provider, userName});
}

exports.resetAnimeList = () => {
  store.dispatch({
    type: 'RESET_MAL_ANIME_LIST'
  });
}
