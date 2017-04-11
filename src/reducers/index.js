import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

const anime = (state = { malAnimeList: [], animeList: {}}, action) => {
  switch (action.type) {
    case 'SET_ANIME_LIST':
      // Set an object with the title as the key
      const list = {...state.animeList};
      list[action.animeList.title] = action.animeList.available;
      return {...state, animeList: list};
    case 'MAL_ANIME_LIST':
      return {...state, malAnimeList: action.malAnimeList};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  anime,
  router: routing
});

export default rootReducer;
