import { store } from 'index';

export function resetStatus() {
  store.dispatch({
    type: 'RESET_STATUS'
  });
}
