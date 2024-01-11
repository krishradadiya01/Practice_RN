import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Common_Btn from '../common_com/common/Common_Btn';

const LogBtn = () => {
  return (
    <View>
      <Text style={styles.login}>LOGIN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    fontSize: 40,
    color: 'white',
    marginTop: 20,
  },
});

export default LogBtn;
