import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../assets/icons'
import { theme } from '../constants/theme'
// import { useNavigation } from '@react-navigation/native'

const BackButton = ({size=26 , navigation}) => {
  // const navigation = useNavigation()
  return (
    <Pressable onPress={()=>navigation.goBack()} style={styles.button}>
        <Icon name={'arrowLeft'} size={size} color={theme.colors.text} />
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
  button:{
    alignSelf:'flex-start',
    padding:5,
    borderRadius: theme.radius.sm,
    backgroundColor: 'rgba(0, 0, 0, 0.07)',
  }
})