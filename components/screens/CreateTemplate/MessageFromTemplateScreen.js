import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';

import { PhilosophizeAILoader, PhilosophizeAILogo } from 'atoms';;

const MessageFromTemplateScreen = ({screenProps, navigation}) => {
  const {isMessageLoading, loadMessage, message} = screenProps
    return (
      <View style={styles.container}>
        <View>
          <PhilosophizeAILogo />
          <View style={styles.templateContainer}>
              {
                (isMessageLoading) ? (
                  <PhilosophizeAILoader />
                ) : (
                <Text style={styles.template}>{message}</Text>
                )
              }
          </View>
          <Button block success onPress={loadMessage}>
            <Text
              style={{color: 'white'}}
            >
              Generate from Template
            </Text>
          </Button>
          <View style={{paddingTop: 30}}>
            <Button block success
              onPress={()=> navigation.navigate('CreateTemplate')}
            >
              <Text style={{color: 'white'}}>
                Make New Template
              </Text>
            </Button>
          </View>
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

  templateContainer: {
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 25,
    padding: 20,
    borderRadius: 20,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: 'white',
    overflow: 'hidden',
    width: 350
  },

  template: {
    fontFamily: 'Menlo',
    color: '#8f8f8f'
  }

});

export default MessageFromTemplateScreen;

