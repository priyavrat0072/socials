import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CameraIcon = ({color,size}) => {
  return (
    <View>
      
      <FontAwesome name="camera" color={color} size={size}/>
    </View>
  )
}

export default CameraIcon

const styles = StyleSheet.create({})