import React, { useState } from 'react';
import { useKeepAwake } from 'expo-keep-awake';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { colors } from "./src/utils/colors";
import { spacing } from "./src/utils/sizes";
import Focus from "./src/features/focus/Focus";
import Timer from "./src/features/timer/Timer";

export default function App() {
  useKeepAwake();

  const [focusSubject, setFocusSubject] = useState('gardening');

  return (
    <View style={styles.container}>
      {
        focusSubject
            ? <Timer focusSubject={focusSubject} />
            : <Focus addSubject={setFocusSubject} />
      }
      <Text>{ focusSubject }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
    backgroundColor: colors.darkGreen
  },
});
