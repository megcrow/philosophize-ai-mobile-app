
  const defaultState = {
    isFetching: false,
    message: "Press the generate message button to see a random message",
    history: []
  }

  export const randomMessage = (state = defaultState, action) => {
    switch(action.type) {
      case 'REQUEST_MESSAGE':
        return Object.assign({}, state, {
          isFetching: true
        })
      case 'RECEIVE_MESSAGE':
        console.log(action.message)
        return Object.assign({}, state, {
          message: action.message,
          isFetching: false,
        })
      default:
        return state
    }
  }

  export const messageHistory = (state = defaultState, action) => {
    switch(action.type) {
      case 'REQUEST_HISTORY':
        return Object.assign({}, state, {
          isFetching: true
        })
      case 'RECEIVE_HISTORY':
        return Object.assign({}, state, {
          history: action.history,
          isFetching: false,
        })
      default:
        return state
    }
  }
