import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

const status = (state = { about: null, status: null, error: null}, action) => {
  switch (action.type) {
    case 'HANDLE_STATUS':
      return {...state, about: action.about, status: action.status, error: action.error};
    case 'RESET_STATUS':
      return {...state, about: null, status: null, error: null};
    default:
      return state;
  }
};

const user = (state = { isLoggedIn: null, myUserData: {}}, action) => {
  switch (action.type) {
    case 'CHECK_SESSION':
      return {...state, isLoggedIn: action.isLoggedIn};
    case 'SET_MY_USER_DATA':
      return {...state, myUserData: action.myUserData};
    default:
      return state;
  }
};

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
  status,
  user,
  anime,
  router: routing
});

export default rootReducer;
