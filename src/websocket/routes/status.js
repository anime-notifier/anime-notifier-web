import { store } from 'index';

export function handleStatus(data){
  store.dispatch({
    type: 'HANDLE_STATUS',
    about: data.about,
    status: data.status,
    error: data.error
  });
}
