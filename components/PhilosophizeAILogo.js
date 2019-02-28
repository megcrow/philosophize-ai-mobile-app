import React from 'react'
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Text } from 'react-native';

const PhilosophizeAILogo = () => {
  return (
    <Text style={{color: 'white'}}>
      philosophize.ai
      &nbsp;
      <FontAwesome>
        {Icons.undo}
      </FontAwesome>
    </Text>
  );
}

export default PhilosophizeAILogo;
