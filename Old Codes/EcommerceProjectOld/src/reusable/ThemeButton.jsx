import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const ThemeButton = ({ text ,w,h , click}) => {
  return (
      <TouchableOpacity onPress={click} style={[styles.button, { width: w ? w :  windowWidth * 0.85 }]}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
  )
}

export default ThemeButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#FFBB0E',
    borderRadius: 14,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
})