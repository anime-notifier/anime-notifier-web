import { store } from 'index';

exports.resetStatus = () => {
  store.dispatch({
    type: 'RESET_STATUS'
  });
}
