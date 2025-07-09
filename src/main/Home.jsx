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
        <Text style={{fontSize:24,fontWeight:'900',textAlign:'center'}}>{user.email}</Text>
        <Text style={{fontSize:24,fontWeight:'900',textAlign:'center'}}>{user.uid}</Text>
        {
          userProfile?(
            <View>
            <Text style={{fontSize:24,fontWeight:'900',textAlign:'center'}}>{userProfile.email}</Text>
            <Text style={{fontSize:24,fontWeight:'900',textAlign:'center'}}>{userProfile.createAt}</Text>
            
            </View>
          ):<Text>User not loaded</Text>
        }

        <Button title="Log-Out" onPress={() => {logout();}}/>
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
