import React from "react";
import {Text, StyleSheet, Pressable} from 'react-native';

const ButtonComponent = ({
    title,
    backgroundColor = '#000',
    titleColor = '#fff',
    titleSize = 14,
    onPress,
    width = '100%',
    containerStyle
}) => {
    return (
        <Pressable
        onPress = {onPress}
        style = {({pressed}) => {
            if (pressed) {
                return [
                    styles.base,
                    {
                      opacity: 0.5,
                      backgroundColor,
                      width
                    },
                    containerStyle
                  ];
            }
            return [
                styles.base,
                {
                  opacity: 1,
                  backgroundColor,
                  width
                },
                containerStyle
              ];
        }}
        >
            <Text style = {[styles.text, { color: titleColor, fontSize: titleSize }]}>
                {title}
            </Text>
        </Pressable>
    )
}

export default ButtonComponent;

const styles = StyleSheet.create({
    text: {
      fontWeight: '600'
    },
    base: {
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 42,
      borderRadius: 4,
      paddingHorizontal: 12
    }
  });