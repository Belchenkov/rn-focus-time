import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

import { fontSizes } from '../../utils/sizes';

const HistoryItem = ({ item, index }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.historyItem(item.status)}>
                { item.subject }
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    historyItem: (status) => ({
        color: status > 1 ? 'red' : 'green',
        fontSize: fontSizes.md,
    }),
});

export default HistoryItem;