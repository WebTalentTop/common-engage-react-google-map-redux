import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { riskFormReducer } from '../modules/riskForm/index';

const rootReducer = combineReducers({
  riskFormReducer,
  form: formReducer,
});

export default rootReducer;
