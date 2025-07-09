import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CallIcon = ({color,size}) => {
  return (
    <View>
      <MaterialIcons name="call" color={color} size={size}/>
    </View>
  )
}

export default CallIcon

const styles = StyleSheet.create({})