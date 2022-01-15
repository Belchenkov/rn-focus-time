import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Platform, AsyncStorage } from 'react-native';

import { colors } from "./src/utils/colors";
import { spacing } from "./src/utils/sizes";
import Focus from "./src/features/focus/Focus";
import Timer from "./src/features/timer/Timer";
import { STATUSES } from './src/constants/statuses';
import FocusHistory from './src/features/focus/FocusHistory';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistorySubjectWithState = (subject, status) => {
    setFocusHistory([
      ...focusHistory,
      { key: String(focusHistory.length + 1), subject, status },
    ])
  };

  const onClear = () => {
    setFocusHistory([]);
  };

  const loadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem('focusHistory');

      if (history && JSON.parse(history).length) {
        setFocusHistory(JSON.parse(history));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const saveFocusHistory = async () => {
    try {
      await AsyncStorage.setItem('focusHistory', JSON.stringify(focusHistory));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadFocusHistory();
  }, [])

  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory])

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
            : (
                <View style={{ flex: 1 }}>
                  <Focus addSubject={setFocusSubject} />
                  <FocusHistory
                    focusHistory={focusHistory}
                    onClear={onClear}
                  />
                </View>
            )
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
