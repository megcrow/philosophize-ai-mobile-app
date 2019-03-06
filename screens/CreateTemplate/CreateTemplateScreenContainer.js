import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Text, View } from 'react-native';

import CreateTemplateScreen from './CreateTemplateScreen';
import MessageFromTemplateScreen from './MessageFromTemplateScreen';
import withTemplate from '../../helpers/withTemplate';

const CreateTemplateScreenContainer = () => {
  return(
    <View>

    </View>
    )
}

export default withTemplate(CreateTemplateScreenContainer);