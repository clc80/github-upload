import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textStyle1} />
      <View style={styles.textStyle2} />
      <View style={styles.textStyle3} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    flexDirection: 'row',
    height: 300,
    justifyContent: 'space-between'
  },
  textStyle1: {
    borderWidth: 3,
    borderColor: 'red',
    backgroundColor: 'pink',
    height: 100,
    width: 100,
  },
  textStyle2: {
    borderWidth: 3,
    borderColor: 'blue',
    backgroundColor: 'yellow',
    height: 100,
    width: 100,
    top: 100
  },
  textStyle3: {
    borderWidth: 3,
    borderColor: 'purple',
    backgroundColor: 'orange',
    height: 100,
    width: 100,
  }
});

export default BoxScreen;
