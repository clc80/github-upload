import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComponentScreen = () => {
  const name = 'Claudia'
  
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with ReactNative!</Text>
      <Text style={styles.textStyle2}>My name is {name}</Text>
    </View>
  )

};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  textStyle2: {
    fontSize: 20
  }
});

export default ComponentScreen;
