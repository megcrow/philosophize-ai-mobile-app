import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

import PhilosophizeAILogo from '../../components/PhilosophizeAILogo';

export default function HistoryScreen ({ loadMessages, isLoadingMessages, generatedMessages, refreshMessages }) {
  return (
    <View
      style={styles.container}
      onFocus={loadMessages}
    >
      <PhilosophizeAILogo />
      {
        (isLoadingMessages || generatedMessages.length === 0) ? (
          <Text style={styles.text}>
            loading...
          </Text>
        ) : (
              <FlatList
                contentContainerStyle={{marginTop: 30}}
                data={generatedMessages}
                refreshing={isLoadingMessages}
                onRefresh={refreshMessages}
                renderItem={({ item })=>
                    <View style={styles.messagesContainer}><Text style={styles.text}>{item.body}</Text></View>
              }
                keyExtractor={item => item.id}
              >
              </FlatList>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#282c34',
  },
  messagesContainer: {
    backgroundColor: 'rgba(255, 255, 255, .5)',
    marginBottom: 5,
    borderRadius: 20,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    overflow: 'hidden',
    width: 350

  },
  text: {
    textAlign: 'center',
    paddingBottom: 5,
    marginBottom: 5,
    fontFamily: 'Menlo',
    color: 'white',
    borderColor: 'black',
    padding: 10

  }
});
