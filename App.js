import React from 'react';
import {  StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Font } from 'expo';

import FooterTabNavigator from './navigation/FooterTabNavigator';

export default class App extends React.Component {

  state= {
    isLoadingComplete: false,
  }

  _loadAssetsAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        'FontAwesome5FreeSolid': require('./assets/fonts/fontawesome.ttf')
      })
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  }

  render() {
    if(!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onError ={this._handleLoadingError}
          onFinish ={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content"/>
          <FooterTabNavigator />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
