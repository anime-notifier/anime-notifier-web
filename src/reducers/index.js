import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

const anime = (state = { animeList: [], animeStatus: {}}, action) => {
  let status;
  switch (action.type) {
    case 'RESET_ANIME_LIST':
      return {...state, animeList: []};
    case 'SET_ANIME_STATUS':
      // Set an object with the title as the key
      status = {...state.animeStatus};
      status[action.animeStatus.title] = action.animeStatus.available;
      return {...state, animeStatus: status};
    case 'SET_ANIME_STATUS_BULK':
      status = {...state.animeStatus};
      action.animeStatusBulk.forEach((val) => {
        status[val.title] = val.available;
      })
      return {...state, animeStatus: status};
    case 'ANIME_LIST':
      // If invalid, pass on the message
      if(action.animeList === "invalid_username"){
        return {...state, animeList: action.animeList};
      }
      // Handle finished and not aired anime status
      status = {...state.animeStatus};
      // Finished anime is always available
      action.animeList.filter(val => val.series_status === 2).forEach((val) => {
        status[val.series_title] = true;
      })
      // Not aired anime is always not available
      action.animeList.filter(val => val.series_status === 3).forEach((val) => {
        status[val.series_title] = false;
      })
      return {...state, animeList: action.animeList, animeStatus: status};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  anime,
  router: routing
});

export default rootReducer;
