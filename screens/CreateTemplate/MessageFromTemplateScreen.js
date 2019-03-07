import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

import PhilosophizeAILogo from '../../components/PhilosophizeAILogo';

const MessageFromTemplateScreen = ({isMessageLoading, loadMessage, message, templateId, navigation}) => {
  console.log('MessageFromTemplateScreen', templateId, message)
    return (
      <View style={styles.container}>
        <View>
          <PhilosophizeAILogo />
          <View style={styles.templateContainer}>
              {
                (isMessageLoading) ? (
                <Text style={styles.template}>
                  loading....
                </Text>
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
  templateBuilder: {
    marginTop: 70,
    backgroundColor: '#17a2b8',
    width: 350,
    height: 100,
    borderRadius: 10
  },

  templateBuilderText: {
    color:'#fff',
    fontSize:20,
    textAlign: 'center',
    marginTop: 10
  },

  templateButtons: {
    flexDirection:'row',
    justifyContent: 'space-evenly',
    marginTop: 10
  },

  templateButtonText: {
    fontSize: 12,
    padding: 5
  },

  templateContainer: {
    alignItems: 'center',
    marginTop: 25,
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

// export default withTemplate(MessageFromTemplateScreen);
export default MessageFromTemplateScreen;
