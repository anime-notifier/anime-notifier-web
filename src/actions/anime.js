import { socket } from 'websocket';
import { store } from 'index';

export function getAnimeStatus(provider, userName) {
  socket.emit('anime', {type: "getList", provider, userName});
}

export function resetAnimeList() {
  store.dispatch({
    type: 'RESET_MAL_ANIME_LIST'
  });
}
