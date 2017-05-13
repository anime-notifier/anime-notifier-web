import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

const anime = (state = { malAnimeList: [], animeList: {}}, action) => {
  let list;
  switch (action.type) {
    case 'SET_ANIME_LIST':
      // Set an object with the title as the key
      list = {...state.animeList};
      list[action.animeList.title] = action.animeList.available;
      return {...state, animeList: list};
    case 'SET_ANIME_LIST_BULK':
      list = {...state.animeList};
      action.animeListBulk.forEach((val) => {
        list[val.title] = val.available;
      })
      return {...state, animeList: list};
    case 'MAL_ANIME_LIST':
      if(action.malAnimeList === "invalid_username"){
        return {...state, malAnimeList: action.malAnimeList};
      }
      // Handle finished and not aired anime status
      list = {...state.animeList};
      // Finished anime is always available
      action.malAnimeList.filter(val => val.series_status === 2).forEach((val) => {
        list[val.series_title] = true;
      })
      // Not aired anime is always not available
      action.malAnimeList.filter(val => val.series_status === 3).forEach((val) => {
        list[val.series_title] = false;
      })
      return {...state, malAnimeList: action.malAnimeList, animeList: list};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  anime,
  router: routing
});

export default rootReducer;
