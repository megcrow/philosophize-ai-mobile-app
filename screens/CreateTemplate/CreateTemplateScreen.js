import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'native-base';

import PhilosophizeAILogo from '../../components/PhilosophizeAILogo';
import withTemplate from '../../helpers/withTemplate';

const CreateTemplateScreen = ({ message, template, submitTemplate }) => {
    return (
      <View style={styles.container}>
        <View>
          <PhilosophizeAILogo />
          <View style={styles.templateBuilder}>
            <Text style={styles.templateBuilderText}>
              Create your own using:
            </Text>
            <View style={styles.templateButtons}>
              <Button light>
                <Text style={styles.templateButtonText}>noun</Text>
              </Button>
              <Button light>
                <Text style={styles.templateButtonText}>a_noun</Text>
              </Button>
              <Button light>
                <Text style={styles.templateButtonText}>adjective</Text>
              </Button>
              <Button light>
                <Text style={styles.templateButtonText}>an_adjective</Text>
              </Button>
            </View>
          </View>
          <View style={styles.templateContainer}>
            <TextInput
              style = {styles.templateText}
              value={template}
              multiline={true}
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

  templateText: {
    fontFamily: 'Menlo',
    color: '#8f8f8f'
  }

});

export default withTemplate(CreateTemplateScreen);
