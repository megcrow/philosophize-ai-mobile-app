import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';

import { PhilosophizeAILoader } from 'atoms';
import checkIfFirstLaunch from '../../../helpers/checkIfFirstLaunch';

export default class CheckIsFirstLaunchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirstLaunch: false,
      hasCheckedAsyncStorage: false
    };
  }
  async componentWillMount() {
    const isFirstLaunch = await checkIfFirstLaunch();
    this.setState({ isFirstLaunch, hasCheckedAsyncStorage: true});
    this.state.hasCheckedAsyncStorage ? (
    this.props.navigation.navigate(this.state.isFirstLaunch ? 'Main' : 'Walkthrough'))
    : (null)
  }

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content"/>
        <PhilosophizeAILoader/>
      </View>
    );
  }
}

