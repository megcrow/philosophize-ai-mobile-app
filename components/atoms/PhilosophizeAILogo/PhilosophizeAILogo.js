import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { height } from 'constants';

const PhilosophizeAILogo = () => {
  return (
    <View style={styles.position}>
      <Text style={styles.header}>
        Philosophize
        &nbsp;
        <FontAwesome name = "undo" style={styles.icon}>
        </FontAwesome>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({

  position: {
    alignItems: 'center',
  },

  header: {
    color: 'white',
    fontSize : height*0.07,
    fontWeight: '500',
    fontFamily: 'PhilosophyScript',
    paddingBottom: 10,
    paddingLeft: 10
  },
  icon: {
    color : '#28a745',
    fontSize : height*0.04
  }
})

export default PhilosophizeAILogo;
