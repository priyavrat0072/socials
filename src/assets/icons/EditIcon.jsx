import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const EditIcon = ({color,size}) => {
  return (
    <View>
      
      <FontAwesome name="edit" color={color} size={size}/>
    </View>
  )
}

export default EditIcon

const styles = StyleSheet.create({})