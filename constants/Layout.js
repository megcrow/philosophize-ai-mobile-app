import { Dimensions, StyleSheet } from 'react-native';

import { Colors } from 'constants'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Layout = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
    height: height
  },
  logo: {
    marginTop: height * .2,
    height: height * .1,
    width: width
  },
  screenContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: height * .5,
    width: width * .9
  }

})

export {
  Layout,
  width,
  height
}

