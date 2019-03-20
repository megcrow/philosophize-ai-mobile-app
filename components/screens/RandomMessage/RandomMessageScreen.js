import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';


import { PhilosophizeAILoader, PhilosophizeAILogo } from 'atoms';
import { generatePhrases, Layout, width }  from 'constants';

let generatePhrase = () => generatePhrases[Math.floor(Math.random()*(generatePhrases.length))]
class RandomMessageScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = { generatePhrase: generatePhrase()}
  }

  handlePress = () => {
    this.setState({ generatePhrase: generatePhrase()});
    this.props.fetchMessage();
  }
    render(){
      const { randomMessage, isFetching } = this.props
      const { message } = randomMessage
      return (
        <View style={Layout.container}>
            <View style={Layout.logo}>
              <PhilosophizeAILogo />
            </View>
            <View style={Layout.screenContent}>
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

  messageContainer: {
    flexGrow: 0.2,
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: 'white',
    overflow: 'hidden',
    width: width * .9,
    minHeight: 117,
    justifyContent: 'center'
  },

  message: {
    fontFamily: 'Menlo',
    color: 'rgb( 143, 143, 143)',
  }
});

export default RandomMessageScreen;

