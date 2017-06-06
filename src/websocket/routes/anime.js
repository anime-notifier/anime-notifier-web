import { store } from 'index';

export function setAnimeStatus(data){
  store.dispatch({
    type: 'SET_ANIME_STATUS',
    animeStatus: data.animeStatus
  });
}

export function setAnimeStatusBulk(data){
  store.dispatch({
    type: 'SET_ANIME_STATUS_BULK',
    animeStatusBulk: data.animeStatusBulk
  });
}

export function animeList(data){
  store.dispatch({
    type: 'ANIME_LIST',
    animeList: data.animeList
  });
}
