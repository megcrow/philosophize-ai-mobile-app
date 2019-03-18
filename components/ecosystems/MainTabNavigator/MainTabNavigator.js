import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { CreateTemplateContainer, HistoryScreenContainer, MessageFromTemplateContainer, RandomMessageContainer } from 'screens';

const RandomMessageStack = createStackNavigator(
  {Home: RandomMessageContainer},
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

const TemplateScreensStack = createStackNavigator(
  {
  CreateTemplate: CreateTemplateContainer,
  MessageFromTemplate: MessageFromTemplateContainer
  },
  { headerMode: 'none' },
  { initialRouteName: 'CreateTemplate' },
);

TemplateScreensStack.navigationOptions = {
  tabBarLabel: 'Create Template',
};

export default createBottomTabNavigator({
  RandomMessageStack,
  HistoryStack,
  TemplateScreensStack,
});

