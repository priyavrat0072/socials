import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp } from '../helpers/comman'
import { theme } from '../constants/theme'
import { getUserImageSrc } from '../services/imageService'

const Avatar = ({
    uri,
    style={},
    size = hp(4.5),
    rounded = theme.radius.md,

}) => {
  return (
    <View>
      <Image 
        source={getUserImageSrc(uri)}
        style={[styles.avatar,{height:size,width:size,borderRadius:rounded},style]}
      />
    </View>
  )
}

export default Avatar

const styles = StyleSheet.create({
    avatar:{
        borderCurve:'continuous',
        borderColor:theme.colors.darkLight,
        borderWidth:1
    }
})