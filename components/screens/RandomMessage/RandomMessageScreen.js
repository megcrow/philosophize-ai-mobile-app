import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';


import { PhilosophizeAILoader, PhilosophizeAILogo } from 'atoms';
import { generatePhrases }  from 'constants';

class RandomMessageScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = { generatePhrase: generatePhrases[Math.floor(Math.random()*(generatePhrases.length))]}
  }

  handlePress = () => {
    this.setState({ generatePhrase: generatePhrases[Math.floor(Math.random()*(generatePhrases.length))]});
    this.props.fetchMessage();
  }
    render(){
      const { randomMessage, isFetching } = this.props
      const { message } = randomMessage
      return (
        <View style={styles.container}>
          <View>
            <PhilosophizeAILogo />
            <View style={styles.messageContainer}>
              {
                isFetching? (<PhilosophizeAILoader/>)
              :(
                message.body? (<Text style = {styles.message}>{message.body}</Text>)
              :(<Text style = {styles.message}>{message}</Text>)
              )
              }
            </View>
            <Button block success
            onPress={this.handlePress}
            >
              <Text style={{color: 'white', fontSize:17}}>
                {this.state.generatePhrase}
              </Text>
            </Button>
          </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#282c34',
  },

  messageContainer: {
    alignItems: 'center',
    marginTop: 36,
    marginBottom: 98,
    padding: 5,
    borderRadius: 20,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: 'white',
    overflow: 'hidden',
    width: 320,
    height: 117,
    justifyContent: 'center'
  },

  message: {
    fontFamily: 'Menlo',
    color: 'rgb( 143, 143, 143)',
  }
});

export default RandomMessageScreen;

