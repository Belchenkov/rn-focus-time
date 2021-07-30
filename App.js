import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from "./src/utils/colors";
import Focus from "./src/features/focus/Focus";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      {
        focusSubject ? (
            <Text>Here is where I'm going to build a timer</Text>
        ) : <Focus addSubject={setFocusSubject} />
      }
      <Text>{ focusSubject }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: colors.darkGreen
  },
});
