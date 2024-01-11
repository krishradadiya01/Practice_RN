import { View, Text } from 'react-native'
import React from 'react'

const Common_Text = (props) => {
    let {text} = props
  return (
    <View>
        <Text>{text || 'Log In'}</Text>
    </View>
  )
}

export default Common_Text;