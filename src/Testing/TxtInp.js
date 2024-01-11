import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const TxtInp = () => {
  return (
    <View>
      <TextInput style={styles.usNm} placeholder="Enter Your UserName" />
    </View>
  );
};

const styles = StyleSheet.create({
  usNm: {
    backgroundColor: 'white',
    fontSize: 15,
    padding: 5,
    width: 250,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 20,
  },
});

export default TxtInp;
