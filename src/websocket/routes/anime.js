import { store } from 'index';

import { setAnimeList } from 'actions/anime'

exports.setAnimeList = (data) => {
  store.dispatch(setAnimeList(data));
}
