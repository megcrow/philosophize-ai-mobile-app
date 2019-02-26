import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import RandomMessageScreen from '../screens/RandomMessage/RandomMessageScreen';
import CreateTemplateScreen from '../screens/CreateTemplate/CreateTemplateScreen';
import StarredMessagesScreen from '../screens/StarredMessages/StarredMessagesScreen';

const RandomMessageStack = createStackNavigator({
  RandomMessage: RandomMessageScreen
});

RandomMessageStack.navigationOptions = {
  tabBarLabel: 'Random Messages',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
};

const CreateTemplateStack = createStackNavigator({
  CreateTemplate: CreateTemplateScreen
});

CreateTemplateStack.navigationOptions = {
  tabBarLabel: 'Create Template',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const StarredMessagesStack = createStackNavigator({
  StarredMessages: StarredMessagesScreen
});

StarredMessagesStack.navigationOptions = {
  tabBarLabel: 'Starred Messages',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  )
}

export default createBottomTabNavigator({
  RandomMessageStack,
  CreateTemplateStack,
  StarredMessagesStack
});
