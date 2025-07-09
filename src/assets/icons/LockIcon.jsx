import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const LockIcon = ({color,size}) => {
  return (
    <View>
      <MaterialIcons name="lock" color={color} size={size}/>
    </View>
  )
}

export default LockIcon

const styles = StyleSheet.create({})