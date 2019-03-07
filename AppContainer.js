import api from './lib/api';
import { compose, withState, withStateHandlers, withHandlers, withPropsOnChange } from 'recompose';
import { Font } from 'expo';

import App from './App';

const enhance = compose(
  withState('isLoadingComplete', 'setIsLoadingComplete', false),
  withHandlers({
    _handleFinishLoading: ({ setIsLoadingComplete }) => {
        return () => setIsLoadingComplete(true);
    },

    _handleLoadingError: ({}) => {
      return(error) => {
        console.warn(error)
      }
    },

    _loadAssetsAsync: ({}) => async () => {
      return Promise.all([
        Font.loadAsync({
          'FontAwesome5FreeSolid': require('./assets/fonts/fontawesome.ttf')
        })
      ]);
    }
  }),

  withStateHandlers(({
    message: 'Press the generate message button to see a random message',
    isMessageLoading: false,
    template:'This sentence has {{ a_noun }} and {{ an_adjective }} {{ noun }} in it.',
    isTemplateLoading: false,
    messageId: null,
    templateId: null,
    isMessageDataFetched: false,
    isTemplateDataFetched: false,
    actions: ['noun', 'a_noun', 'adjective', 'an_adjective']
  }),{
    setMessage: () => (payload) => ({ message: payload }),
    setIsMessageLoading: () => (payload) => ({ isMessageLoading: payload }),
    setTemplate: () => (payload) => ({ template: payload }),
    setIsTemplateLoading: () => (payload) => ({ isTemplateLoading: payload }),
    setMessageId: () => (payload) => ({ messageId: payload }),
    setTemplateId: ({ templateId }) => (payload) => ({ templateId: payload || templateId }),
    setIsMessageDataFetched: () => (payload) => ({ isMessageDataFetched: payload }),
    setIsTemplateDataFetched: () => (payload) => ({ isTemplateDataFetched: payload })
  }),

  withHandlers({

    loadMessage: ({ setMessage, setIsMessageLoading, templateId, setIsMessageDataFetched, isMessageDataFetched }) => () => {
      console.log('loadMessage was called')
      setIsMessageLoading(true);
      if(templateId === null ){
        api.post('messages')
          .then(({ data }) => {
            setMessage(data.body);
            console.log('new message: ', data.body)
            setIsMessageLoading(false);
            setIsMessageDataFetched(true);
            console.log(templateId)
          })
          .catch(e => {
            setIsMessageLoading(false);
            console.error(e);
          })} else {
            setIsMessageLoading(true);
            api.post('messages', { template_id: templateId })
              .then(({ data }) => {
                setMessage(data.body);
                console.log('new message: ', data.body)
                setIsMessageLoading(false);
                setIsMessageDataFetched(true);
                console.log(isMessageDataFetched)
              })
              .catch(e => {
                setIsMessageLoading(false);
                console.error(e);
          })
        }
    },

    updateTemplate: ({ setTemplate }) => {
      return(template) =>{
        setTemplate(template)
        }
    }

  }),


  withHandlers({
    addAction: ({ template, updateTemplate }) => (action) => {
      console.log(action)
      updateTemplate(`${template} {{ ${action} }}`)
    },

    submitTemplate: ({ setIsTemplateLoading, template, setTemplateId, setIsTemplateDataFetched, isTemplateDataFetched}) => () => {
      console.log('submitTemplate was called')
      setIsTemplateLoading(true);
      api.post('templates', {body: template})
        .then(resp => {
          setIsTemplateLoading(false);
          setTemplateId(resp.data.id);
          console.log('created template!', resp.data);
          setIsTemplateDataFetched(true);
          console.log(isTemplateDataFetched)
          return resp
        })
        .catch(e => {
          setIsTemplateLoading(false);
          console.error(e);
        })
    }

  }),

  withPropsOnChange(['templateId'], ({ loadMessage, templateId }) => {
    templateId && loadMessage();
  }),

  // withPropsOnChange(['isMessageDataFetched', 'isTemplateDataFetched'], ({ setIsMessageDataFetched, setIsTemplateDataFetched, isMessageDataFetched, isTemplateDataFetched, message, templateId, loadMessage, navigation }) => {
  //   console.log('withPropsOnChange1 messagedata' ,isMessageDataFetched, isTemplateDataFetched)
  //   if(isMessageDataFetched && isTemplateDataFetched) {
  //     console.log('hit')
  //     setIsMessageDataFetched(false);
  //     setIsTemplateDataFetched(false)

  //   } else {
  //       return null
  //     }
  //   }
  // ),
);

export default enhance(App)

