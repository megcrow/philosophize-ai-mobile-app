import React from 'react';
import {  StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, registerRootComponent } from 'expo';

import { AppNavigator } from 'ecosystems';


const App = ({isLoadingComplete, _handleFinishLoading, _handleLoadingError, _loadAssetsAsync, ...rest}) => {
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

export default App;

