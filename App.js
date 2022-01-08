import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import { colors } from "./src/utils/colors";
import { spacing } from "./src/utils/sizes";
import Focus from "./src/features/focus/Focus";
import Timer from "./src/features/timer/Timer";
import { STATUSES } from './src/constants/statuses';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistorySubjectWithState = (subject, status) => {
    setFocusHistory([
      ...focusHistory,
      { subject, status },
    ])
  };

  return (
    <View style={styles.container}>
      {
        focusSubject
            ? <Timer
                focusSubject={focusSubject}
                clearSubject={() => {
                  addFocusHistorySubjectWithState(focusSubject, STATUSES.CANCELED);
                  setFocusSubject(null);
                }}
                onTimerEnd={() => {
                  addFocusHistorySubjectWithState(focusSubject, STATUSES.COMPLETE);
                  setFocusSubject(null);
                }}
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
