import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';

import { PhilosophizeAILoader, PhilosophizeAILogo } from 'atoms';
import { Layout, width } from 'constants';

 class MessageFromTemplateScreen extends React.Component  {
   render(){
    const { navigation, fetchMessageById, randomMessageById, submitTemplateReducer} = this.props
    const { isFetching, messageById } = randomMessageById
    const { templateId } = submitTemplateReducer
      return (
        <View style={Layout.container}>
            <View style={Layout.logo}>
              <PhilosophizeAILogo />
            </View>
            <View style={Layout.screenContent}>
              <View style={styles.templateContainer}>
                  {
                    (isFetching || !messageById) ? (
                      <PhilosophizeAILoader />
                    ) : (
                    <Text style={styles.template}>{messageById.body}</Text>
                    )
                  }
              </View>
              <Button block success onPress={() => {fetchMessageById(templateId)}}>
                <Text
                  style={{color: 'white', fontSize:17}}
                >
                  Generate from Template
                </Text>
              </Button>
              <Button block success
                onPress={()=> navigation.navigate('CreateTemplate')}
              >
                <Text style={{color: 'white', fontSize:17}}>
                  Make New Template
                </Text>
              </Button>
            </View>
        </View>
    )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#282c34',
  },

  templateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 20,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: 'white',
    overflow: 'hidden',
    width: width * 0.9,
    minHeight: 100
  },

  template: {
    fontFamily: 'Menlo',
    color: '#8f8f8f'
  }

});

export default MessageFromTemplateScreen;

