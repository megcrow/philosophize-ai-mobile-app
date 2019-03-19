import React from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

import { Colors } from 'constants';

const styles = {
  wrapper: {
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.backgroundColor
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.backgroundColor
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.backgroundColor
    },
    text: {
      color: 'white',
      fontSize: 17
    },
    header: {
      color: 'white',
      fontFamily: 'PhilosophyScript',
      fontSize: 36
    }
  }
}

export default WelcomeSwiper = () => {
  return(
    <Swiper style={styles.wrapper} showsButtons>
      <View style={styles.slide1}>
        <Text style={styles.header}>
        Philosophize.ai
        </Text>
        <Text style={styles.text}>
          Generate Randomly Insightful Text Strings
        </Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.header}>
        Philosophize.ai
        </Text>
        <Text style={styles.text}>
          View and Vote on Everyone's Strings
        </Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.header}>
        Philosophize.ai
        </Text>
        <Text style={styles.text}>
          Edit & Create Your Own Templates
        </Text>
      </View>
    </Swiper>
  )
}