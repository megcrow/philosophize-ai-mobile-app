import {
    REQUEST_MESSAGE,
    RECEIVE_MESSAGE
  } from '../actions';

  const randomMessageReducer = (state = {
    isFetching: false,
    message: "Press the generate message button to see a random message"
  }, action) => {
    switch(action.type) {
      case REQUEST_MESSAGE:
        return {
          ...state,
          isFetching: true
        }
      case RECEIVE_MESSAGE:
        console.log(action.message)
        return{
          ...state,
          isFetching: false,
          message: action.message
        }
      default:
        return state
    }
  }

  export default randomMessageReducer;

