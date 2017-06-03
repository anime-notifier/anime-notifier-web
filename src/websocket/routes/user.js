import { store } from 'index';

exports.checkSession = (data) => {
  store.dispatch({
    type: 'CHECK_SESSION',
    isLoggedIn: data.isLoggedIn
  });
}

exports.setMyUserData = (data) => {
  store.dispatch({
    type: 'SET_MY_USER_DATA',
    myUserData: data.myUserData
  });
}
