import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import Swiper from 'react-native-swiper';

import { Colors } from 'constants';

const styles = StyleSheet.create({
    slide1: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: Colors.backgroundColor
    },
    slide2: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: Colors.backgroundColor
    },
    slide3: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: Colors.backgroundColor
    },
    text: {
      marginTop: 90,
      color: 'white',
      fontSize: 22,
      textAlign: 'center',
      width: 250,
      marginBottom: 50
    },
    buttonText: {
      color: 'white',
      fontSize: 22,
      textAlign: 'center',
      width: 250
    },
    buttonContainer: {
      alignItems: 'center'
    },
    header: {
      color: 'white',
      fontFamily: 'PhilosophyScript',
      fontSize: 42,
      marginTop: 144,
      padding: 10,
    },
    dotStyle: {
      borderColor:'#cfd4e0',
      borderWidth: 1,
      width:20,
      height: 20,
      borderRadius: 10,
      backgroundColor: Colors.backgroundColor,
      marginLeft:10,
      marginRight:10
    },
    activeDotStyle: {
      borderColor:'#cfd4e0',
      borderWidth: 1,
      width:20,
      height: 20,
      borderRadius: 10,
      marginLeft:10,
      marginRight:10
    }
})

export default WelcomeSwiper = (props) => {
  return(
    <Swiper
      loop={false}
      dotStyle={styles.dotStyle}
      activeDotColor='#cfd4e0'
      activeDotStyle={styles.activeDotStyle}
      >
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
        <View style={styles.buttonContainer}>
          <Button success
            onPress={() => props.navigation.navigate('Main')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </Button>
        </View>
      </View>
    </Swiper>
  )
}

