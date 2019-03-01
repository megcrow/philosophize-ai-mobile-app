import { compose, withState, withHandlers } from 'recompose';
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
  })
);

export default enhance(App)
