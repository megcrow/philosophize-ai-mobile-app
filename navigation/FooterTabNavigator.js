import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import RandomMessageScreen from '../screens/RandomMessage/RandomMessageScreen';
import CreateTemplateScreen from '../screens/CreateTemplate/CreateTemplateScreen';
import MessageFromTemplateScreen from '../screens/CreateTemplate/MessageFromTemplateScreen';
import HistoryScreenContainer from '../screens/History/HistoryScreenContainer';


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
          component={RandomMessageScreen}
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
          <Scene
          key="messageFromTemplateScreen"
          component={MessageFromTemplateScreen}
          hideNavBar={true}
          />
        </Scene>
      </Scene>
    </Router>
  );
}

export default FooterTabNavigator
