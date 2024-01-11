import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Common_Btn = props => {
  let {lgnBtn, Josh, text} = props;
  
  return (
    <TouchableOpacity style={[styles.Button, lgnBtn]}>
      <Text style={[styles.btnTxt, Josh]}>{text || 'LOGIN'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button: {
    backgroundColor: 'red',
    width: 280,
    height: 25,
    borderWidth: 2,
    borderRadius: 50,
    marginTop: 70,
  },

  btnTxt: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
});

export default Common_Btn;
