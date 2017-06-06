import { store } from 'index';

export function checkSession(data){
  store.dispatch({
    type: 'CHECK_SESSION',
    isLoggedIn: data.isLoggedIn
  });
}

export function setMyUserData(data){
  store.dispatch({
    type: 'SET_MY_USER_DATA',
    myUserData: data.myUserData
  });
}
