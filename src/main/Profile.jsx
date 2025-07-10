import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'
import { wp } from '../helpers/comman'
import Icon from '../assets/icons'
import { theme } from '../constants/theme'
import auth from '@react-native-firebase/auth';

const Profile = ({route}) => {
 const profileData = route.params.userProfileData
 const navigation = useNavigation()

   const handleLogout = () => {
    auth()
      .signOut()
      .then(res => {
        Alert.alert('User logout successfully!!!!');
      })
      .catch(err => {
        Alert.alert('Unable to logout');
      });
  };

  return (
    <ScreenWrapper bg={'white'}>
      <UserHeader profileData={profileData} navigation={navigation} handleLogout={handleLogout} />
    </ScreenWrapper>
  )
}

const UserHeader=({profileData,navigation,handleLogout})=>{
  // console.log('profileDatainUserHeader----',profileData)
  return(
    <View style={{flex:1,backgroundColor:'white',paddingHorizontal:wp(4)}}>
      <View>
        <Header title='Profile' showBackButton={true}/>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Icon name={'logout'} color={theme.colors.rose} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  logoutButton:{
    position:'absolute',
    right:0,
    padding:5,
    borderRadius:theme.radius.sm,
    backgroundColor:'#fee2e2'
  }
})