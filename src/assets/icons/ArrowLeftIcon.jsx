import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ArrowLeftIcon = ({color,size}) => {
  return (
    <View>
      <MaterialIcons name="keyboard-arrow-left" color={color} size={size}/>
    </View>
  )
}

export default ArrowLeftIcon

const styles = StyleSheet.create({})