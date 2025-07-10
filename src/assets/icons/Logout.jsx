import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Logout = ({color,size}) => {
  return (
    <View>
      <FontAwesome name="power-off" color={color} size={size}/>
    </View>
  )
}

export default Logout

const styles = StyleSheet.create({})