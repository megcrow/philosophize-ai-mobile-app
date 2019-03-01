import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import RandomMessageContainer from '../screens/RandomMessage/RandomMessageContainer';
import CreateTemplateScreen from '../screens/CreateTemplate/CreateTemplateScreen';
import HistoryScreenContainer from '../screens/History/HistoryScreen';
import TabBarIcon from '../components/TabBarIcon'

const FooterTabNavigator = () => {
  return (
  <Router navigationBarStyle={{ backgroundColor: '#282c34'}}>
      <Scene
      key="tabbar"
      tabs = {true}
      activeBackgroundColor="#c9e0fb"
      >
        <Scene key="randomMessage" title="Random Message">
          <Scene
          key="randomMessageScreen"
          component={RandomMessageContainer}
          hideNavBar={true}
          />
        </Scene>
        <Scene key="history" title="History">
          <Scene
          key="historyScreen"
          component={HistoryScreenContainer}
          hideNavBar={true}
          />
        </Scene>
        <Scene key="createTemplate" title="Create Template">
          <Scene
          key="createTemplateScreen"
          component={CreateTemplateScreen}
          hideNavBar={true}
          />
        </Scene>
      </Scene>
    </Router>
  );
}

export default FooterTabNavigator
