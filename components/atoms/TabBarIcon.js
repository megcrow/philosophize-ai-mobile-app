import React from 'react';
import { Text, View } from 'react-native';

const TabBarIcon = (props) => {
  return (
    <View>
      <Text style={{fontSize:13, color:props.focused ? 'white' : 'rgb( 113, 138, 153)', width:100, textAlign:'center'}}>{props.name}</Text>
    </View>
  )
}

export default TabBarIcon;

