import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const TxtPass = () => {
  return (
    <View>
      <TextInput placeholder="Enter Your Password" style={styles.usPs} />
    </View>
  );
};

export default TxtPass;

const styles = StyleSheet.create({
  usPs: {
    backgroundColor: 'white',
    fontSize: 15,
    padding: 5,
    width: 250,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 20,
  },
});
