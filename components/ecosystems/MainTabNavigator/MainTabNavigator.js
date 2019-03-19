import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { CreateTemplateContainer, HistoryScreenContainer, MessageFromTemplateContainer, RandomMessageContainer } from 'screens';
import { TabBarIcon } from 'atoms';
import { Colors } from 'constants'

const RandomMessageStack = createStackNavigator(
  {Home: RandomMessageContainer},
  { headerMode: 'none' },
  );

RandomMessageStack.navigationOptions = {
  tabBarLabel: 'Random',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='Random'
    />
  ),
  tabBarOptions:{
    activeBackgroundColor: Colors.tabIconSelected,
    showLabel: false
  }
};

const HistoryStack = createStackNavigator(
  {History: HistoryScreenContainer},
  { headerMode: 'none' }
);

HistoryStack.navigationOptions = {
  tabBarLabel: 'History',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='History'
    />
  ),
  tabBarOptions:{
    activeBackgroundColor: Colors.tabIconSelected,
    showLabel: false
  }
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
  tabBarLabel: 'Customize',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='Customize'
    />
  ),
  tabBarOptions:{
    activeBackgroundColor: Colors.tabIconSelected,
    showLabel: false
  }
};

export default createBottomTabNavigator({
  RandomMessageStack,
  HistoryStack,
  TemplateScreensStack,
});

