import React, { useState } from 'react';
import { View, StyleSheet, Text, Vibration, Platform } from "react-native";
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';

import { colors } from "../../utils/colors";
import { spacing } from "../../utils/sizes";
import Countdown from '../../components/Countdown';
import Timing from './Timing';
import RoundedButton from '../../components/RoundedButton';

const DEFAULT_TIME = 1;

const Timer = ({ focusSubject, onTimerEnd }) => {
    useKeepAwake();

    const [minutes, setMinutes] = useState(DEFAULT_TIME);
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);

    const onProgress = progress => {
        setProgress(progress);
    };

    const changeTime = min => {
        setMinutes(min);
        setProgress(1);
        setIsStarted(false);
    };

    const vibrate = () => {
        if (Platform.OS === 'ios') {
            const interval = setInterval(() => Vibration.vibrate(), 1000);
            setTimeout(() => clearInterval(interval), 5000);
        } else {
            Vibration.vibrate(5000);
        }
    };

    const onEnd = () => {
        vibrate();
        setMinutes(DEFAULT_TIME);
        setProgress(1);
        setIsStarted(false);
        onTimerEnd();
    };

    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown
                    minutes={minutes}
                    isPaused={!isStarted}
                    onProgress={onProgress}
                    onEnd={onEnd}
                />
            </View>
            <View style={{ paddingTop: spacing.xxl }}>
                <Text style={styles.title}>Focusing on:</Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
            <View style={{
                paddingTop: spacing.sm,
            }}>
                <ProgressBar
                    color='#519600'
                    progress={progress}
                    style={{
                        height: 10,
                    }}
                />
            </View>
            <View style={styles.buttonWrapper}>
                <Timing onChangeTime={changeTime} />
            </View>
            <View style={styles.buttonWrapper}>
                { isStarted ? (
                    <RoundedButton
                        title="pause"
                        onPress={() => setIsStarted(false)}
                    />
                ) : (
                    <RoundedButton
                        title="start"
                        onPress={() => setIsStarted(true)}
                    />
                )}
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
   container: {
       flex: 1,
   },
   title: {
       color: colors.white,
       textAlign: 'center'
   },
   task: {
       color: colors.white,
       textAlign: 'center',
       fontWeight: 'bold'
   },
   countdown: {
       flex: .5,
       alignItems: 'center',
       justifyContent: 'center',
   },
   buttonWrapper: {
       flex: .3,
       flexDirection: 'row',
       padding: 15,
       justifyContent: 'center',
       alignItems: 'center',
   }
});

export default Timer;