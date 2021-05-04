import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from "react-native-paper";

const Focus = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>What would you like to focus on?</Text>
                <View style={styles.inputContainer}>
                    <TextInput />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 90
    },
    titleContainer: {
        flex: .5,
        padding: 16,
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 23,
    },
    inputContainer: {
        paddingTop: 20
    }
});

export default Focus;