import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

const anime = (state = { animeList: []}, action) => {
  switch (action.type) {
    case 'SET_ANIME_LIST':
      return {...state, animeList: action.animeList};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  anime,
  router: routing
});

export default rootReducer;
