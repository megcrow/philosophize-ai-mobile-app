import React from 'react';
import {  StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';

import FooterTabNavigator from './navigation/FooterTabNavigator';
import AppNavigator from './navigation/AppNavigator'

export default function App ({isLoadingComplete, _handleFinishLoading, _handleLoadingError, _loadAssetsAsync, ...rest}) {
  if(!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={_loadAssetsAsync}
        onError ={_handleLoadingError}
        onFinish ={_handleFinishLoading}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        {/* <FooterTabNavigator /> */}
        <AppNavigator screenProps={rest} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
