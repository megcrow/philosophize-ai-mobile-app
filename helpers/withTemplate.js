import api from '../lib/api';
import { compose, withHandlers, withStateHandlers, lifecycle, withPropsOnChange} from 'recompose';
import { Actions } from 'react-native-router-flux';

export default compose(

  withStateHandlers({
    message:'Press the generate message button to see a random message',
    isMessageLoading: false,
    template:'This sentence has {{ a_noun }} and {{ an_adjective }} {{ noun }} in it.',
    isTemplateLoading: false,
    messageId: null,
    templateId: null
  },{
    setMessage: () => (payload) => ({ message: payload }),
    setIsMessageLoading: () => (payload) => ({ isMessageLoading: payload }),
    setTemplate: () => (payload) => ({ template: payload }),
    setIsTemplateLoading: () => (payload) => ({ isTemplateLoading: payload }),
    setMessageId: () => (payload) => ({ messageId: payload }),
    setTemplateId: ({ templateId }) => (payload) => ({ templateId: payload || templateId }),
  }),
  withHandlers({
    loadMessage: ({ setMessage, setIsMessageLoading, templateId, message, loadMessage }) => () => {
      console.log('loadMessage was called')
      setIsMessageLoading(true);
      if(templateId === null ){
        api.post('messages')
          .then(({ data }) => {
            setMessage(data.body);
            console.log('new message: ', data.body)
            setIsMessageLoading(false);
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
              })
              .catch(e => {
                setIsMessageLoading(false);
                console.error(e);
          })
        }
    },

    addAction: (setTemplate, template) => (action) => {
      setTemplate({text: `${template.text} {{${action}}}`})
    },
  }),

  withHandlers({
    submitTemplate: ({ setIsTemplateLoading, template, setTemplateId, loadMessage, message }) => () => {
      console.log('submitTemplate was called')
      setIsTemplateLoading(true);
      api.post('templates', {body: template})
        .then(resp => {
          setIsTemplateLoading(false)
          setTemplateId(resp.data.id)
          console.log('created template!', resp.data)
          // loadMessage();
        })
        .catch(e => {
          setIsTemplateLoading(false);
          console.error(e)
        })
    }
  }),

  withHandlers({
    submitAndLoad: ({ submitTemplate, loadMessage }) => () => {
      console.log('submit and load was called!')
      submitTemplate();
      loadMessage();
    }
  }),
  withPropsOnChange(['message', 'templateId'], ({ message, templateId, loadMessage }) => {
    if(message !== 'Press the generate message button to see a random message' && Actions.currentScene !== 'randomMessageScreen') {
      Actions.replace('messageFromTemplateScreen', { templateId, message, loadMessage });
    } else {
        console.log('welp')}
    }
  ),

)

