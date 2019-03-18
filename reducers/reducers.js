
  const defaultState = {
    isFetching: false,
    message: 'Press the generate message button to see a random message',
    template:'This sentence has {{ a_noun }} and {{ an_adjective }} {{ noun }} in it.',
    templateId: null,
    messageById: null,
    history: []
  }

  export const randomMessage = (state = defaultState, action) => {
    switch(action.type) {
      case 'REQUEST_MESSAGE':
        return Object.assign({}, state, {
          isFetching: true
        })
      case 'RECEIVE_MESSAGE':
        return Object.assign({}, state, {
          message: action.message,
          isFetching: false,
        })
      default:
        return state
    }
  }

  export const randomMessageById = (state = {
    isFetching: defaultState.isFetching,
    templateId: defaultState.templateId,
    messageById: defaultState.messageById
  }, action) => {
    switch(action.type) {
      case 'REQUEST_MESSAGE_BY_ID':
        return Object.assign({}, state, {
          isFetching: true,
          templateId: action.templateId
        })
      case 'RECEIVE_MESSAGE_BY_ID':
        return Object.assign({}, state, {
          messageById: action.message,
          isFetching: false
        })
      default:
        return state
    }
  }

  export const messageHistory = (state = {
    isFetching: defaultState.isFetching,
    history: defaultState.history,
  }, action) => {
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

  export const submitTemplateReducer = (state = {
    isFetching: defaultState.isFetching,
    templateId: defaultState.templateId,
  }, action) => {
    switch(action.type) {
      case 'REQUEST MESSAGE':
        return Object.assign({}, state, {
          isFetching: true
        })
      case 'SUBMIT_TEMPLATE':
        return Object.assign({}, state, {
          templateId: action.templateId,
        })
      default:
        return state
    }
  }

  export const updateTemplate = (state = {
    template: defaultState.template,
  }, action) => {
    switch(action.type) {
      case 'UPDATE_TEMPLATE':
        return Object.assign({}, state, {
          template: action.template
        })
      default:
        return state
    }
  }

