import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export const InputField = ({
    inputStyle,
    containerStyle,
    placeholderTextColor = '#444',
    ...rest
}) => {
    <View style = {[styles.container, containerStyle]}>
        <TextInput {...rest}
        placeholderTextColor = {placeholderTextColor}
        style = {[styles.input, inputStyle]}
        />   
    </View>
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        flexDirection: 'row',
        padding: 12
    },
    input: {
        flex: 1,
        width: '100%',
        fontSize: 18
    }
})