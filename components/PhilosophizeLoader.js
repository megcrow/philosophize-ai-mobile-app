import React from 'react';
import { PacmanIndicator } from 'react-native-indicators';
import { View, StyleSheet } from 'react-native';

const PhilosophizeLoader = () => {
  return(
    <View style={styles.Loader}>
      <PacmanIndicator color='yellow'/>
    </View>
  )
}

const styles = StyleSheet.create({
  Loader: {
    flex: 1,
    backgroundColor: '#282c34'
  },

});

export default PhilosophizeLoader

