import { combineReducers } from 'redux';
import ui from 'reducer/ui/uiReducer';

const appReducer = combineReducers({
  ui
});

export default (state, action) => {
  return appReducer(state, action);
};
