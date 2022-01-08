import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import { colors } from "./src/utils/colors";
import { spacing } from "./src/utils/sizes";
import Focus from "./src/features/focus/Focus";
import Timer from "./src/features/timer/Timer";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  useEffect(() => {
    if (focusHistory) {
      setFocusHistory([
          ...focusHistory,
          focusSubject,
      ])
    }
  }, [focusSubject])

  return (
    <View style={styles.container}>
      {
        focusSubject
            ? <Timer
                focusSubject={focusSubject}
                onTimerEnd={() => {setFocusSubject(null)}}
                clearSubject={() => setFocusSubject(null)}
            />
            : <Focus addSubject={setFocusSubject} />
      }
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
