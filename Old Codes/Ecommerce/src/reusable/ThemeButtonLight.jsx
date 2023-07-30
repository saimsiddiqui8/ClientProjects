import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const ThemeButtonLight = ({ text, click }) => {
    return (
        <TouchableOpacity onPress={click} style={[styles.button, { width: windowWidth * 0.85 }]}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ThemeButtonLight;

const styles = StyleSheet.create({
    button: {
        height: 50,
        borderWidth: 2,
        borderColor: '#222222',
        borderStyle: 'solid',
        borderRadius: 14,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
})