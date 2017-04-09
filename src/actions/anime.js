import { socket } from 'websocket';

exports.getAnimeList = (userName) => {
  socket.emit('anime', {type: "getList", userName});
}

exports.setAnimeList = (json) => {
  return {
    type: 'SET_ANIME_LIST',
    animeList: json.animeList
  };
}
