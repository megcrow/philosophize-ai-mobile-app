import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import CheckIsFirstLaunchScreen from '../CheckIsFirstLaunch/CheckIsFirstLaunchScreen';
import MainTabNavigator from '../MainTabNavigator/MainTabNavigator';
import { WalkthroughSwiper } from 'screens';

export default createAppContainer(createSwitchNavigator(
  {
  CheckIsFirstLaunch: CheckIsFirstLaunchScreen,
  Main: MainTabNavigator,
  Walkthrough: WalkthroughSwiper
},
{
  initialRouteName: 'CheckIsFirstLaunch'
}
));