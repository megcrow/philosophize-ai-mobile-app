import api from '../../lib/api';
import { compose, withHandlers, withState } from 'recompose';

import RandomMessageScreen from './RandomMessageScreen'

api.use(async (response) => {
  try {
      const data = await response.json()
      response['data'] = data
  } catch (e) {
      console.error(e)
  }

  return Promise.resolve(response)
})

const enhance = compose(
  withState('message', 'setMessage', {
    loading: false,
    text: 'hello',
  }),

  withHandlers({
    loadMessage: ({ setMessage }) => async () => {
        try {
          setMessage({loading:true});
          const response = await api.post('messages');
          console.log(response.data.body);
          setMessage({loading: false, text: response.data.body});

        } catch(e) {
          setMessage({loading:false});
          console.error(e);
        }
      },
    }
  )
)

export default enhance(RandomMessageScreen)
