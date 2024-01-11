import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const UsrName = () => {
  return <Text style={styles.usrNm}>Username</Text>;
};

const styles = StyleSheet.create({
  usrNm: {
      marginTop: 120,
      fontSize: 30,
      fontFamily: 'Cochin',
  },
});
export default UsrName;
