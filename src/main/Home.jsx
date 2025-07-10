import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import ScreenWrapper from '../components/ScreenWrapper';
import { getUserData } from '../services/userService';
import { hp, wp } from '../helpers/comman';
import { theme } from '../constants/theme';
import Icon from '../assets/icons';
import { useNavigation } from '@react-navigation/native';
import Avatar from '../components/Avatar';

const Home = ({userProp}) => {

 
   const userProfile = userProp.userData
    //  console.log('userProfileinhome---------',userProfile)
    const navigation = useNavigation()

  
  const logout = () => {
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

      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>LinkUp</Text>
            <View style={styles.icon}>
              <Pressable onPress={()=>{navigation.navigate('notification')}}>
                <Icon name="heart" size={hp(3.2)} color={theme.colors.text}  />
              </Pressable>
              <Pressable onPress={()=>{navigation.navigate('newPost')}}>
                <Icon name="plus" size={hp(3.2)} color={theme.colors.text}  />
              </Pressable>
              <Pressable onPress={()=>{navigation.navigate('profile',{userProfileData:userProfile})}}>
                <Avatar
                  uri={userProfile?.image}
                  size={hp(4.3)}
                  rounded={theme.radius.sm}
                  style={{borderWidth:2}}
                />
              </Pressable>
               
            </View>
        </View>
        
   <Button title="Log-Out" onPress={() => {logout();}}/>
    
         
        
      
    
        
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:10,
    marginHorizontal:wp(4)
  },
  title:{
    color:theme.colors.text,
    fontSize:hp(3.2),
    fontWeight:theme.fonts.bold
  },
  icon:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:18
  }
});
