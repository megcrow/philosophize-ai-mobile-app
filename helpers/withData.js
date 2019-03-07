import api from '../lib/api';
import { compose, withHandlers, withStateHandlers, lifecycle, withPropsOnChange} from 'recompose';
import withNavigationState from './withNavigationState';


export default compose(
  withNavigationState,
  withStateHandlers(({ navigationState }) => ({
    message: navigationState['message'] || 'Press the generate message button to see a random message',
    isMessageLoading: false,
    template:'This sentence has {{ a_noun }} and {{ an_adjective }} {{ noun }} in it.',
    isTemplateLoading: false,
    messageId: null,
    templateId: null,
    isMessageDataFetched: false,
    isTemplateDataFetched: false
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

    // addAction: (setTemplate, template) => (action) => {
    //   setTemplate({text: `${template.text} {{${action}}}`})
    // },
  }),

  withHandlers({
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

  withPropsOnChange(['isMessageDataFetched', 'isTemplateDataFetched'], ({ setIsMessageDataFetched, setIsTemplateDataFetched, isMessageDataFetched, isTemplateDataFetched, message, templateId, loadMessage, navigation }) => {
    console.log('withPropsOnChange messagedata' ,isMessageDataFetched, isTemplateDataFetched)
    if(isMessageDataFetched && isTemplateDataFetched) {
      console.log('hit')
      setIsMessageDataFetched(false);
      setIsTemplateDataFetched(false)
      navigation.navigate('MessageFromTemplate', { templateId, message, loadMessage });

    } else {
        return null
      }
    }
  ),

)

