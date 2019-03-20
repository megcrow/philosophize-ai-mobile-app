import api from 'lib';

export const REQUEST_MESSAGE = 'REQUEST_MESSAGE';
export const REQUEST_HISTORY = 'REQUEST_HISTORY';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGE_BY_ID = 'RECEIVE_MESSAGE_BY_ID'
export const RECEIVE_HISTORY = 'RECEIVE_HISTORY';
export const SUBMIT_TEMPLATE = 'SUBMIT_TEMPLATE';
export const UPDATE_TEMPLATE = 'UPDATE_TEMPLATE';


export const requestMessage = () => ({
  type: REQUEST_MESSAGE,
})

export const requestMessageHistory = () => ({
  type: REQUEST_HISTORY,
})

export const receiveMessage = (data) => ({
  type: RECEIVE_MESSAGE,
  message: data
})

export const receiveMessageById = (data) => ({
  type: RECEIVE_MESSAGE_BY_ID,
  message: data,
})

export const receiveMessageHistory = (data) => ({
  type: RECEIVE_HISTORY,
  history: data
})

export const submitTemplateAction = (data) => ({
  type: SUBMIT_TEMPLATE,
  template: data.body,
  templateId: data.id
})

export const updateTemplateAction = (newTemplate) => ({
  type: UPDATE_TEMPLATE,
  template: newTemplate
})


export const fetchMessage = () => (dispatch) => {
  dispatch(requestMessage())
  return api.post('messages')
    .then(({ data }) => dispatch(receiveMessage(data)))
}

export const fetchMessageById = (id) => (dispatch) => {
  dispatch(requestMessage());
  return api.post('messages', { template_id: id })
    .then(({ data }) => dispatch(receiveMessageById(data)))
}

export const fetchMessageHistory = () => (dispatch) => {
  dispatch(requestMessageHistory())
  return api.get('messages')
    .then(({ data }) => dispatch(receiveMessageHistory(data)))
}

export const submitTemplate = (template) => (dispatch) => {
  dispatch(requestMessage());
  return api.post('templates', {body: template})
    .then(resp => {
      dispatch(submitTemplateAction(resp.data))

      return api.post('messages', { template_id: resp.data.id })
        .then(({ data }) => dispatch(receiveMessageById(data)))
    })
}

export const addAction = (template, action) => (dispatch)  =>{
  dispatch(updateTemplateAction((`${template} {{ ${action} }}`)))
}
