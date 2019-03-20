import React from 'react';
import { PacmanIndicator } from 'react-native-indicators';
import { View, StyleSheet } from 'react-native';

import { height } from 'constants';

const PhilosophizeAILoader = () => {
  return(
    <View style={styles.Loader}>
      <PacmanIndicator color='rgb(242, 204, 67)' size={height *0.1}/>
    </View>
  )
}

const styles = StyleSheet.create({
  Loader: {
    flex: 1,
    alignItems: 'flex-start',
  },

});

export default PhilosophizeAILoader

