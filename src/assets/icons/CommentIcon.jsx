import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CommentIcon = ({color,size}) => {
  return (
    <View>
      
      <FontAwesome name="comment-o" color={color} size={size}/>
    </View>
  )
}

export default CommentIcon

const styles = StyleSheet.create({})