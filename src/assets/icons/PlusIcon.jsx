import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PlusIcon = ({color,size}) => {
  return (
    <View>
      <FontAwesome name="plus-square-o" color={color} size={size}/>
    </View>
  )
}

export default PlusIcon

const styles = StyleSheet.create({})