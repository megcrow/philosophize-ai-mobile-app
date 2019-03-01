import React from 'react'
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { StyleSheet, Text, View } from 'react-native';


const PhilosophizeAILogo = () => {
  return (
    <View style={styles.position}>
      <Text style={styles.header}>
        philosophize.ai
        &nbsp;
        <FontAwesome style={styles.icon}>
          {Icons.undo}
        </FontAwesome>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({

  position: {
    marginTop: 107,
    alignItems: 'center',
  },

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
