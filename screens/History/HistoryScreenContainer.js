import api from '../../lib/api';
import { compose, withHandlers, withState, lifecycle } from 'recompose';

import HistoryScreen from './HistoryScreen';

const enhance = compose(
  withState('generatedMessages', 'setGeneratedMessages', []),
  withState('isLoadingMessages', 'setIsLoadingMessages', false),

  withHandlers({

    loadMessages: ({ generatedMessages, setGeneratedMessages, setIsLoadingMessages, isLoadingMessages }) => async () => {
      console.log('loadMessages has been called');
      try {
        setIsLoadingMessages(true);
        const response = await api.get('messages');
        setGeneratedMessages(response.data);
        console.log('response.data[0] is:', response.data[0])
        console.log('response.data[0].body is:', response.data[0].body)
        setIsLoadingMessages(false)
      } catch(e) {
        setIsLoadingMessages(false);
        console.error(e);
      }
    },
  }),

  lifecycle({
    componentDidMount() {
      this.props.loadMessages();
    }
  })
)

export default enhance(HistoryScreen)
