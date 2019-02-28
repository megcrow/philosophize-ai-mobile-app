import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PhilosophizeAILogo from '../../components/PhilosophizeAILogo';

export default class StarredMessagesScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PhilosophizeAILogo />
        <Text style={styles.text}>I am the random message screen!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282c34',
  },
  text: {
    color: '#fff'
  }
});
