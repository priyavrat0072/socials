import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HeartIcon = ({color,size}) => {
  return (
    <View>
      
      <FontAwesome name="heart-o" color={color} size={size}/>
    </View>
  )
}

export default HeartIcon

const styles = StyleSheet.create({})