import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import RandomMessageScreen from '../screens/RandomMessage/RandomMessageScreen'
import HistoryScreenContainer from '../screens/History/HistoryScreenContainer';
import CreateTemplateScreen from '../screens/CreateTemplate/CreateTemplateScreen';
import MessageFromTemplateScreen from '../screens/CreateTemplate/MessageFromTemplateScreen'

const RandomMessageStack = createStackNavigator(
  {Home: RandomMessageScreen},
  { headerMode: 'none' }
  );

RandomMessageStack.navigationOptions = {
  tabBarLabel: 'Random Message',
};

const HistoryStack = createStackNavigator(
  {History: HistoryScreenContainer},
  { headerMode: 'none' }
);

HistoryStack.navigationOptions = {
  tabBarLabel: 'History',
};

const CreateTemplateStack = createStackNavigator(
  {
    CreateTemplate: CreateTemplateScreen,
    MessageFromTemplate: MessageFromTemplateScreen
  },
  { headerMode: 'none' },
  { initialRouteName: 'CreateTemplate' },
  );

CreateTemplateStack.navigationOptions = {
  tabBarLabel: 'Create Template',
};

export default createBottomTabNavigator({
  RandomMessageStack,
  HistoryStack,
  CreateTemplateStack,
});
