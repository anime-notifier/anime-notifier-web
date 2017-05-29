import { store } from 'index';

exports.handleStatus = (data) => {
  store.dispatch({
    type: 'HANDLE_STATUS',
    about: data.about,
    status: data.status,
    error: data.error
  });
}
