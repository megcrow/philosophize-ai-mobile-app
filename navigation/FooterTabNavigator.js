import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import RandomMessageContainer from '../screens/RandomMessage/RandomMessageContainer';
import CreateTemplateScreen from '../screens/CreateTemplate/CreateTemplateScreen';
import HistoryScreen from '../screens/History/HistoryScreen';

const FooterTabNavigator = () => {
  return (
  <Router navigationBarStyle={{ backgroundColor: '#282c34'}}>
      <Scene
      key="tabbar"
      tabs = {true}
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
          component={HistoryScreen}
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
