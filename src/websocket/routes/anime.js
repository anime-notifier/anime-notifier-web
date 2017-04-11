import { store } from 'index';

exports.setAnimeList = (data) => {
  store.dispatch({
    type: 'SET_ANIME_LIST',
    animeList: data.animeList
  });
}

exports.malAnimeList = (data) => {
  store.dispatch({
    type: 'MAL_ANIME_LIST',
    malAnimeList: data.malAnimeList
  });
}
