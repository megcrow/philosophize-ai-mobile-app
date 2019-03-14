import React from 'react';
import store from '../../../store'
import {  StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';

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
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content"/>
          <AppNavigator screenProps={rest} />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

