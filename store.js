
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import root from 'reducers/root'

// import randomMessageReducer from '../../../reducers';

const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store


