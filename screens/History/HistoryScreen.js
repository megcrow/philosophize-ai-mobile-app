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
        isLoadingMessages ? (
          <Text style={styles.text}>
            loading...
          </Text>
        ) : (
          console.log('generatedMessages[0] is:', generatedMessages[0])

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

{/* <FlatList
data={generatedMessages}
renderItem={({message})=> <Text style={styles.text}>{message}</Text>}
>
</FlatList> */}