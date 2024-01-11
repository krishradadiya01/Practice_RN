import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const PssWrd = () => {
  return (
    <View>
      <Text style={styles.usrPs}>Password</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  usrPs: {
    marginTop: 80,
    fontSize: 30,
    fontFamily: 'Cochin',
  },
});

export default PssWrd;
