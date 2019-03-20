import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Header } from 'react-navigation'
import { Button } from 'native-base';

import { PhilosophizeAILoader, PhilosophizeAILogo } from 'atoms';
import { Colors, Layout, width, height } from 'constants'

const CreateTemplateScreen = (props) => {

  const actions = ['noun', 'a_noun', 'adjective', 'an_adjective']
  const { navigation, submitTemplate, submitTemplateReducer, updateTemplate, addAction, updateTemplateAction} = props
  const { isFetching } = submitTemplateReducer
  const { template } = updateTemplate

    return (
        (isFetching) ? (<PhilosophizeAILoader/>) : (
          <KeyboardAvoidingView contentContainerStyle={styles.container} behavior="position" keyboardVerticalOffset = {Header.HEIGHT - 200}>
            <ScrollView keyboardShouldPersistTaps='handled'>
                <View style={Layout.logo}>
                  <PhilosophizeAILogo />
                </View>
                <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}} accessible={false}>
                  <View style={Layout.screenContent}>
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
                    <Text style={{color: 'white', fontSize:17}}>
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
    paddingLeft: width*0.05,
    backgroundColor: Colors.backgroundColor,
    height: height
  },
  templateBuilder: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: width * 0.9,
    borderRadius: 10,
    paddingBottom: 20,
    marginBottom: 20
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
    justifyContent: 'center',
    padding: 20,
    borderRadius: 20,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: 'white',
    overflow: 'hidden',
    minHeight: 100,
    width: width*0.9,
    marginBottom: 20
  },

  templateText: {
    fontFamily: 'Menlo',
    color: '#8f8f8f'
  }

});

export default CreateTemplateScreen;

