import React from 'react';
import { Text, View } from 'react-native';

import { Colors } from 'constants';

const TabBarIcon = (props) => {
  return (
    <View>
      <Text style={{fontSize:13, color:props.focused ? 'white' : 'rgb( 113, 138, 153)'}}>{props.name}</Text>
    </View>
  )
}

export default TabBarIcon;

