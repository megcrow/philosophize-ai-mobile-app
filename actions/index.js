import api from 'lib';

export const REQUEST_MESSAGE = 'REQUEST_MESSAGE';
export const REQUEST_HISTORY = 'REQUEST_HISTORY'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_HISTORY = 'RECEIVE_HISTORY';

export const requestMessage = () => ({
  type: REQUEST_MESSAGE,
})

export const requestMessageHistory = () => ({
  type: REQUEST_HISTORY,
})

export const receiveMessage = (json) => ({
  type: RECEIVE_MESSAGE,
  message: json
})

export const receiveMessageHistory = (json) => ({
  type: RECEIVE_HISTORY,
  history: json
})

export const fetchMessage = () => (dispatch) => {
  dispatch(requestMessage())
  return api.post('messages')
    .then(response => {
      return response.json()
    })
    .then(json => {
      console.log('fetchMessage json', json)

      dispatch(receiveMessage(json))
    })
}

export const fetchMessageHistory = () => (dispatch) => {
  dispatch(requestMessageHistory())
  return api.get('messages')
  .then(response => response.json()
  )
  .then(json =>{
    dispatch(receiveMessageHistory(json))
  }
  )
}

