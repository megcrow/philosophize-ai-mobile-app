import api from '../lib/api';
import { compose, withProps } from 'recompose';
import { Actions } from 'react-native-router-flux';

export default compose(
  withProps(({ navigation }) => {
    const { params } = navigation['state']
    return { navigationState: params || {} }
  })
)

