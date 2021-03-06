import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TechScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
    <Text>Enter Name:  </Text>
      <TextInput
        style={styles.inputStyles}
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>My name is {name}</Text>

      <Text>Enter Password:  </Text>
        <TextInput
          style={styles.inputStyles}
          autoCapitalize='none'
          autoCorrect={false}
          value={password}
          onChangeText={(newValue) => setPassword(newValue)}
        />
        {password.length < 5
          ? <Text>Password must be longer than 5 characters</Text>
          : null
        }
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyles: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TechScreen;
