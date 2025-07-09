import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MailIcon = ({color,size}) => {
  return (
    <View>
      <MaterialIcons name="mail" color={color} size={size}/>
    </View>
  )
}

export default MailIcon

const styles = StyleSheet.create({})