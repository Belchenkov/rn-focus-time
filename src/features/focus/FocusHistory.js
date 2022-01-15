import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    SafeAreaView,
} from 'react-native';

import { fontSizes, spacing } from "../../utils/sizes";
import RoundedButton from "../../components/RoundedButton";
import HistoryItem from './HistoryItem';

const FocusHistory = ({ focusHistory, onClear }) => {
    const clearHistory = () => {
        onClear();
    };

    return (
        <>
            <SafeAreaView style={styles.container}>
                {
                    !!focusHistory.length && (
                        <>
                            <Text style={styles.title}>Things we've focused on</Text>
                            <FlatList
                                data={focusHistory}
                                renderItem={HistoryItem}
                                style={styles.list}
                                contentContainerStyle={styles.listContainerStyle}
                            />
                            <View style={styles.clearContainer}>
                                <RoundedButton
                                    size={75}
                                    title="Clear"
                                    onPress={() => onClear()}
                                />
                            </View>
                        </>
                    )
                }
            </SafeAreaView>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: .5,
        alignItems: 'center',
    },
    list: {
        flex: 1,
    },
    listContainerStyle: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: fontSizes.lg,
    },
    clearContainer: {
        alignItems: 'center',
        padding: spacing.md,
    }
});

export default FocusHistory;