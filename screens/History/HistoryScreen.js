import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

import PhilosophizeAILogo from '../../components/PhilosophizeAILogo';

export default function HistoryScreen ({ loadMessages, isLoadingMessages, generatedMessages }) {
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
            data={generatedMessages}
            renderItem={({ item })=> <Text style={styles.text}>{item.body}</Text>}
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
  text: {
    color: '#fff'
  }
});
