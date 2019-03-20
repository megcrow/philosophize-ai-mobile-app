import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux'

import * as reducers from './reducers';

const defaultState = {
  isFetching: false,
  message: "Press the generate message button to see a random message",
  template:'This sentence has {{ a_noun }} and {{ an_adjective }} {{ noun }} in it.',
  templateId: null,
  messageById: null,
  history: []
}

const root = combineReducers({
  ...defaultState,
  ...reducers,
  // router: routerReducer
})

export default root;