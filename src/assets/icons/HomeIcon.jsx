import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeIcon = ({color,size}) => {
  return (
    <View>
      
      <FontAwesome name="home" color={color} size={size}/>
    </View>
  )
}

export default HomeIcon

const styles = StyleSheet.create({})
