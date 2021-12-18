import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const minutesToMillis = min => min * 1000 * 60;
const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
};

const Countdown = ({
    minutes = 20,
    isPaused,
}) => {
    const [millis, setMillis] = useState(minutesToMillis(minutes));
    const minute = Math.floor(millis / 1000 / 60) % 60;
    const seconds = Math.floor(millis / 1000) % 60;
    return (
        <Text style={styles.text}>
            { formatTime(minute) }:{ formatTime(seconds) }
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: fontSizes.xxxl,
        fontWeight: 'bold',
        color: colors.white,
        padding: spacing.lg,
        backgroundColor: 'rgba(94, 132, 226, 0.3)'
    }
});

export default Countdown;