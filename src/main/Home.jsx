import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import ScreenWrapper from '../components/ScreenWrapper';
import { getUserData } from '../services/userService';

const Home = ({userProp}) => {

  

  const user = userProp.userData._user
  const [userProfile,setUserProfile] = useState()
  // console.log('userIdHome----------',user.uid)
  // console.log('userProps------',userProp.userData._user.email)
  

  useEffect(()=>{
    const fetchUserProfile=async()=>{
      const data = await getUserData(user)
      // console.log('data=======',data)
      setUserProfile(data)
    }
    if(user){
      fetchUserProfile()
    }
  },[user])
  
  console.log('userProfiledataHomeFile',userProfile)
  
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
    <ScreenWrapper>
      <View>
        <Text>HEllo</Text>
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
