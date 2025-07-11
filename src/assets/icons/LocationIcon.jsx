import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const LocationIcon = ({color,size}) => {
  return (
    <View>
      <MaterialIcons name="location-on" color={color} size={size}/>
    </View>
  )
}

export default LocationIcon

const styles = StyleSheet.create({})