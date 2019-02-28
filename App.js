import React from 'react';
import {  StatusBar, StyleSheet, View } from 'react-native';

import FooterTabNavigator from './navigation/FooterTabNavigator';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  loadAssetsAsync = async () => {
    await Font.loadAsync({
      'FontAwesome': require('./assets/fonts/fontawesome.ttf')
    })
  }
  componentDidMount() {
    this.loadAssetsAsync()
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <FooterTabNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
