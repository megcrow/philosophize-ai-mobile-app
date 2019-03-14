import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux'

import * as reducers from './reducers';


const defaultState = {
  isFetching: false,
  message: "Press the generate message button to see a random message"
}

const root = combineReducers({
  ...defaultState,
  ...reducers,
  // router: routerReducer
})

export default root;