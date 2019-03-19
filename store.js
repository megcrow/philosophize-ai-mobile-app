import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import root from 'reducers/root'

// import randomMessageReducer from '../../../reducers';

const store = createStore(
  root,
  applyMiddleware(thunk)
)

export default store


