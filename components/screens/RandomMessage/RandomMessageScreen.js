import api from 'lib';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import { compose, withStateHandlers, withHandlers  } from 'recompose';

import { PhilosophizeAILoader, PhilosophizeAILogo } from 'atoms';

const enhance = compose(
  withStateHandlers(({
    randomMessage: 'Press the generate message button to see a random message',
    isRandomMessageLoading: false
  }), ({
    setRandomMessage: () => (payload) => ({ randomMessage: payload }),
    setIsRandomMessageLoading: () => (payload) => ({ isRandomMessageLoading: payload})
  })),
  withHandlers({
    loadRandomMessage: ({ setRandomMessage, setIsRandomMessageLoading }) => () => {
      setIsRandomMessageLoading(true);
      api.post('messages')
          .then(({ data }) => {
            setRandomMessage(data.body);
            setIsRandomMessageLoading(false);
          })
          .catch(e => {
            setIsRanomdMessageLoading(false);
            console.error(e);
          })
    }
  })
);

const RandomMessageScreen = ({ randomMessage, loadRandomMessage, isRandomMessageLoading }) => {
    return (
      <View style={styles.container}>
        <View>
          <PhilosophizeAILogo />
          <View style={styles.messageContainer}>
            {isRandomMessageLoading? (<PhilosophizeAILoader/>):(<Text style = {styles.message}>
              {randomMessage}
            </Text>)}
          </View>
          <Button block success
          onPress={loadRandomMessage}
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

export default enhance(RandomMessageScreen);

