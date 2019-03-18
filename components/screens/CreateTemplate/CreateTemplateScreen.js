import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Header } from 'react-navigation'
import { Button } from 'native-base';

import { PhilosophizeAILoader, PhilosophizeAILogo } from 'atoms';

const CreateTemplateScreen = (props) => {

  const actions = ['noun', 'a_noun', 'adjective', 'an_adjective']
  const { navigation, submitTemplate, submitTemplateReducer, updateTemplate, addAction, updateTemplateAction} = props
  const { isFetching } = submitTemplateReducer
  const { template } = updateTemplate

    return (
        (isFetching) ? (<PhilosophizeAILoader/>) : (
          <KeyboardAvoidingView style={styles.container} behavior="position" keyboardVerticalOffset = {Header.HEIGHT - 100}>
            <ScrollView keyboardShouldPersistTaps='handled'>
              <PhilosophizeAILogo />
              <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}} accessible={false}>
                <View>
                  <View style={styles.templateBuilder}>
                    <Text style={styles.templateBuilderText}>
                      Create your own using:
                    </Text>
                    <View style={styles.templateButtons}>
                      {actions.map((action, index) =>(
                        <Button light onPress={() => { addAction(template, action)}} key={index}>
                          <Text style={styles.templateButtonText} >{action}</Text>
                        </Button>
                      ), )}
                    </View>
                  </View>
                  <View style={styles.templateContainer}>
                    <TextInput
                      style = {styles.templateText}
                      value={template}
                      multiline={true}
                      onChangeText = {(text) => updateTemplateAction(text) }
                    >
                    </TextInput>
                  </View>
                <Button block success
                  onPress={() => {
                    submitTemplate(template)
                    navigation.navigate('MessageFromTemplate')
                  }}
                >
                  <Text style={{color: 'white'}}>
                    Generate From Template
                  </Text>
                </Button>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </KeyboardAvoidingView>)
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

  templateText: {
    fontFamily: 'Menlo',
    color: '#8f8f8f'
  }

});

export default CreateTemplateScreen;

