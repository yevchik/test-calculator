import React from 'react'
import { StyleSheet, Dimensions, Text, TouchableOpacity, View } from "react-native";

const window = Dimensions.get("window")
const buttonWidth = window.width/4

const styles = StyleSheet.create({
  button: {
    width: buttonWidth,
    height: buttonWidth -8,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
    flex: 1
  },
  main: {
    backgroundColor: '#33333a'
  },
  second: {
    backgroundColor: '#ee980d'
  },
  third: {
    backgroundColor: '#a5a5a5'
  },
  dubled: {
    width: buttonWidth*2,
    flex: 2
  },
  inerStyles: {
    color: 'white',
    fontSize: 35,
  }
});

function Button({view, capacity, variant, onPress}) {

return (
    <TouchableOpacity 
      style={[styles.button, styles[variant], capacity === '2' && styles.dubled]}
      onPress={onPress}>
      <Text style={styles.inerStyles}>{view}</Text>
    </TouchableOpacity>
  );
}

export default Button