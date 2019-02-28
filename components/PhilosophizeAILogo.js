import React from 'react'
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { StyleSheet, Text } from 'react-native';


const PhilosophizeAILogo = () => {
  return (
    <Text style={styles.header}>
      philosophize.ai
      &nbsp;
      <FontAwesome style={styles.icon}>
        {Icons.undo}
      </FontAwesome>
    </Text>
  );
}
const styles = StyleSheet.create({
  header: {
    color: 'white',
    fontSize : 38,
    fontWeight: '500'
  },
  icon: {
    color : '#28a745',
    fontSize: 28
  }
})

export default PhilosophizeAILogo;
