import React from 'react';
import {View, Button, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from './counterSlice';

export function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <Button
        title="Increment value"
        onPress={() => dispatch(increment())}></Button>
      <Text>{count}</Text>
      <Button
        title="Decrement value"
        onPress={() => dispatch(decrement())}></Button>
    </View>
  );
};
