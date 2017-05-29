import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

const anime = (state = { animeList: [], animeStatus: {}}, action) => {
  let animeStatus;
  switch (action.type) {
    case 'RESET_ANIME_LIST':
      return {...state, animeList: []};
    case 'SET_ANIME_STATUS':
      // Set an object with the title as the key
      animeStatus = {...state.animeStatus};
      animeStatus[action.animeStatus.title] = action.animeStatus.available;
      return {...state, animeStatus: animeStatus};
    case 'SET_ANIME_STATUS_BULK':
      animeStatus = {...state.animeStatus};
      action.animeStatusBulk.forEach((val) => {
        animeStatus[val.title] = val.available;
      })
      return {...state, animeStatus: animeStatus};
    case 'ANIME_LIST':
      // If invalid, pass on the message
      if(action.animeList === "invalid_username"){
        return {...state, animeList: action.animeList};
      }
      // Handle finished and not aired anime status
      animeStatus = {...state.animeStatus};
      // Finished anime is always available
      action.animeList.filter(val => val.status === 2).forEach((val) => {
        animeStatus[val.title] = true;
      })
      // Not aired anime is always not available
      action.animeList.filter(val => val.status === 3).forEach((val) => {
        animeStatus[val.title] = false;
      })
      return {...state, animeList: action.animeList, animeStatus: animeStatus};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  anime,
  router: routing
});

export default rootReducer;
