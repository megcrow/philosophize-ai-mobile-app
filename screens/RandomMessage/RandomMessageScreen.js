import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';


import PhilosophizeAILogo from '../../components/PhilosophizeAILogo';
import withTemplate from '../../helpers/withTemplate';

const RandomMessageScreen = ({ message, loadMessage }) => {
    return (
      <View style={styles.container}>
        <View>
          <PhilosophizeAILogo />
          <View style={styles.messageContainer}>
            <Text style = {styles.message}>
              {message}
            </Text>
          </View>
          <Button block success
          onPress={loadMessage}
          >
            <Text style={{color: 'white'}}>
              Generate Message
            </Text>
          </Button>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#282c34',
  },

  messageContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 25,
    padding: 20,
    borderRadius: 20,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    overflow: 'hidden',
    width: 350
  },

  message: {
    fontFamily: 'Menlo',
    color: 'white'
  }
});

export default withTemplate(RandomMessageScreen);
