import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import CreateTemplateScreen from './CreateTemplateScreen';
import MessageFromTemplateScreen from './MessageFromTemplateScreen';
import withTemplate from '../../helpers/withTemplate';

const CreateTemplateScreenContainer = (props) => {
  return (
      <Scene>
        <Scene
          key="createTemplateScreen"
          component={CreateTemplateScreen}
          hideNavBar={true}
          {...props}
          />
        <Scene
          key="messageFromTemplateScreen"
          component={MessageFromTemplateScreen}
          hideNavBar={true}
          {...props}
        />
      </Scene>
  );
}

export default CreateTemplateScreenContainer;