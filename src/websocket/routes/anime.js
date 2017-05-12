import { store } from 'index';

exports.setAnimeList = (data) => {
  store.dispatch({
    type: 'SET_ANIME_LIST',
    animeList: data.animeList
  });
}

exports.setAnimeListBulk = (data) => {
  store.dispatch({
    type: 'SET_ANIME_LIST_BULK',
    animeListBulk: data.animeListBulk
  });
}

exports.malAnimeList = (data) => {
  store.dispatch({
    type: 'MAL_ANIME_LIST',
    malAnimeList: data.malAnimeList
  });
}
