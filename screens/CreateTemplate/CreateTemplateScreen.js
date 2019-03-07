import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { Button } from 'native-base';
import { compose, withPropsOnChange} from 'recompose';

import PhilosophizeAILogo from '../../components/PhilosophizeAILogo';


const enhance = compose(
  withPropsOnChange(['screenProps'], ({ screenProps, navigation }) => {
    const { isMessageDataFetched, isTemplateDataFetched, setIsMessageDataFetched, setIsTemplateDataFetched } = screenProps
    console.log('withPropsOnChange messagedata' , isMessageDataFetched, isTemplateDataFetched)
    if(isMessageDataFetched && isTemplateDataFetched) {
      console.log('hit')
      setIsMessageDataFetched(false);
      setIsTemplateDataFetched(false)
      navigation.navigate('MessageFromTemplate');
    }
  }),
)



const CreateTemplateScreen = ({ screenProps }) => {
  const { submitTemplate, template, actions, addAction, updateTemplate } = screenProps
    return (
      <View style={styles.container}>
          <ScrollView>
            <PhilosophizeAILogo />
            <View style={styles.templateBuilder}>
              <Text style={styles.templateBuilderText}>
                Create your own using:
              </Text>
              <View style={styles.templateButtons}>
                {actions.map((action, index) =>(
                  <Button light onPress={() => addAction(action)} key={index}>
                    <Text style={styles.templateButtonText}>{action}</Text>
                  </Button>
                ), )}
              </View>
            </View>
            <View style={styles.templateContainer}>
              <TextInput
                style = {styles.templateText}
                value={template}
                multiline={true}
                onChangeText = {(text) => updateTemplate(text)}
              >
              </TextInput>
            </View>
            <Button block success
              onPress={submitTemplate}
            >
              <Text style={{color: 'white'}}>
                Generate From Template
              </Text>
            </Button>
          </ScrollView>
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

  templateText: {
    fontFamily: 'Menlo',
    color: '#8f8f8f'
  }

});

export default enhance(CreateTemplateScreen);
