import React, { useReducer } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const reducer = (state, action) => {
  //state === { counter: number }
  //action === { type: counter + 1 or counter -1, payload: 1 }
  switch(action.type) {
    case 'increaseCounter':
      return {...state, counter: state.counter + action.payload};
    case 'decreaseCounter':
      return {...state, counter: state.counter - action.payload};
    default:
      return state;
  }
};

const CounterScreen2 = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: 'increaseCounter', payload: 1})}/>
      <Button
        title="Decrease"
        onPress={() => dispatch({type: 'decreaseCounter', payload: 1})} />
      <Text>Current Count: {counter} </Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default CounterScreen2;
