import { store } from 'index';

exports.setAnimeStatus = (data) => {
  store.dispatch({
    type: 'SET_ANIME_STATUS',
    animeStatus: data.animeStatus
  });
}

exports.setAnimeStatusBulk = (data) => {
  store.dispatch({
    type: 'SET_ANIME_STATUS_BULK',
    animeStatusBulk: data.animeStatusBulk
  });
}

exports.animeList = (data) => {
  store.dispatch({
    type: 'ANIME_LIST',
    animeList: data.animeList
  });
}
