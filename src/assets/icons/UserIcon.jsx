import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const UserIcon = ({color,size}) => {
  return (
    <View>
      
      <FontAwesome name="user" color={color} size={size}/>
    </View>
  )
}

export default UserIcon

const styles = StyleSheet.create({})