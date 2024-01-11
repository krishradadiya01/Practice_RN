import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

function Common_TxtInp({textInputStyle, placeholderText}) {
  return (
    <View>
      <TextInput
        style={[styles.usNm, textInputStyle]}
        placeholder={placeholderText}
      />
    </View>
  );
}

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

export default Common_TxtInp;
