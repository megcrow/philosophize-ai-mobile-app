import React from 'react';
import { PacmanIndicator } from 'react-native-indicators';
import { View, StyleSheet } from 'react-native';

const PhilosophizeAILoader = () => {
  return(
    <View style={styles.Loader}>
      <PacmanIndicator color='rgb(242, 204, 67)'/>
    </View>
  )
}

const styles = StyleSheet.create({
  Loader: {
    flex: 1,
    backgroundColor: '#282c34'
  },

});

export default PhilosophizeAILoader

