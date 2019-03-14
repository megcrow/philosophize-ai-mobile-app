import api from 'lib';

export const REQUEST_MESSAGE = 'REQUEST_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const requestMessage = () => ({
  type: REQUEST_MESSAGE,
})

export const receiveMessage = (json) => ({
  type: RECEIVE_MESSAGE,
  message: json
})

export const fetchMessage = () => (dispatch) => {
  dispatch(requestMessage())
  return api.post('messages')
    .then(response =>response.json()
    )
    .then(json => {
      dispatch(receiveMessage(json))
    })
}

