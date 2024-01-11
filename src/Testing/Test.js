import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import UsrName from './UsrName';
// import TxtInp from './TxtInp';
import PssWrd from './PssWrd';
import LogBtn from './LogBtn';
import TxtPass from './TxtPass';
import Common_TxtInp from '../common_com/common/Common_TxtInp';
import Common_Btn from '../common_com/common/Common_Btn';
import Common_Text from '../common_com/common/Common_Text';

const App = () => {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;

  return (
    <View style={{alignItems: 'center'}}>
      <Image
        style={{width: screenWidth, height: screenHeight, position: 'absolute'}}
        source={{
          uri: 'https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000',
        }}
      />

      <LogBtn />
      <UsrName />

      <Common_TxtInp
        placeholderText={'Enter Your Username'}
        textInputStyle={styles.textInputStyle}
      />

      <Common_TxtInp />
      <Common_Btn />
      <Common_TxtInp />
      <PssWrd />
      <TxtPass placeholderText="Enter Your Password" />
      <Common_Btn text={'SIGN UP'} />
      <Common_Btn text={'Login'} lgnBtn={styles.ball2} Josh={styles.ball3} />
      <Common_Text />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    backgroundColor: 'white',
    marginTop: 10,
  },

  ball: {
    backgroundColor: 'white',
  },

  textInputStyle: {
    backgroundColor: 'white',
  },

  ball2: {
    backgroundColor: 'yellow',
    borderRadius: 2,
  },

  ball3: {
    color: 'red',
  },
});
export default App;
