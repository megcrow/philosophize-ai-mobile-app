import api from 'lib';
import { compose, withHandlers, withState, lifecycle } from 'recompose';

import HistoryScreen from './HistoryScreen';

const enhance = compose(
  withState('generatedMessages', 'setGeneratedMessages', []),
  withState('isLoadingMessages', 'setIsLoadingMessages', false),

  withHandlers({
    loadMessages: ({ setGeneratedMessages, setIsLoadingMessages }) => async () => {
      try {
        setIsLoadingMessages(true);
        const response = await api.get('messages');
        setGeneratedMessages(response.data);
        setIsLoadingMessages(false)
      } catch(e) {
        setIsLoadingMessages(false);
        console.error(e);
      }
    },
  }),

  withHandlers({
    refreshMessages: ({setGeneratedMessages, setIsLoadingMessages, loadMessages}) => () => {
      setGeneratedMessages([]);
      loadMessages();
  }
  }),

  lifecycle({
    componentDidMount() {
      this.props.loadMessages();
    }
  })
)

export default enhance(HistoryScreen)

