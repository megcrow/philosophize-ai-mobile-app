import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

import { PhilosophizeAILoader, PhilosophizeAILogo } from 'atoms';
import { Layout, width } from 'constants';

class  HistoryScreen extends React.Component {
  componentDidMount() {
    const { fetchMessageHistory } = this.props
    fetchMessageHistory()
  }
  render (){
    const { messageHistory, fetchMessageHistory } = this.props
    const { history, isFetching } = messageHistory
    return (
      <View
        style={Layout.container}
        onFocus={fetchMessageHistory}
      >
        <View style={Layout.logo}>
          <PhilosophizeAILogo />
        </View>
        <View style={Layout.screenContent}
        >
          {
            (isFetching) ? (
                <PhilosophizeAILoader />
            ) : (
                  <FlatList
                    contentContainerStyle={{marginTop: 30}}
                    data={history}
                    refreshing={isFetching}
                    onRefresh={fetchMessageHistory}
                    renderItem={({ item })=>
                        <View style={styles.messagesContainer}><Text style={styles.text}>{item.body}</Text></View>
                  }
                    keyExtractor={item => item.id}
                  >
                  </FlatList>
            )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  messagesContainer: {
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: 20,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    overflow: 'hidden',
    width: width* .9

  },
  text: {
    textAlign: 'center',
    paddingBottom: 5,
    marginBottom: 5,
    fontFamily: 'Menlo',
    color: '#8f8f8f',
    borderColor: 'black',
    padding: 10

  }
});

export default HistoryScreen;

