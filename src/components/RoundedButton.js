import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const RoundedButton = ({
                        style = {},
                        textStyle = {},
                        size = 125,
                        ...props
                       }) => {
    return (
        <TouchableOpacity style={[styles(size).radius, style]}>
            <Text
                onPress={props.onPress}
                style={[styles(size).text, textStyle]}
            >{ props.title }</Text>
        </TouchableOpacity>
    );
};

const styles = size => StyleSheet.create({
   radius: {
       borderRadius: size / 2,
       width: size,
       height: size,
       alignItems: 'center',
       justifyContent: 'center',
       borderColor: "#fff",
       borderWidth: 2
   },
    text: {
       color: "#fff",
       fontWeight: 'bold',
       fontSize: size / 3
    }
});

export default RoundedButton;