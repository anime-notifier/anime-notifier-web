import { socket } from 'websocket';

exports.getAnimeList = () => {
  socket.emit('anime', {type: "getList"});
}

exports.setAnimeList = (json) => {
  return {
    type: 'SET_ANIME_LIST',
    animeList: json.animeList
  };
}
