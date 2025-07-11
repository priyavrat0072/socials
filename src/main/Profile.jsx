import { Alert, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'
import { hp, wp } from '../helpers/comman'
import Icon from '../assets/icons'
import { theme } from '../constants/theme'
import auth from '@react-native-firebase/auth';
import Avatar from '../components/Avatar'
import { UserContext } from '../context/UserProvider'


const Profile = () => {
   const {userProviderContext,setUserProviderContext} = useContext(UserContext)
    const profileData = userProviderContext
    const navigation = useNavigation()

  const onLogOut=()=>{
    auth()
      .signOut()
      .then(res => {
        Alert.alert('User logout successfully!!!!');
      })
      .catch(err => {
        Alert.alert('Unable to logout');
      });
  }

   const handleLogout = async() => {
    Alert.alert('Confirm','Are you sure you want to log out?',[
      {
        text:'cancel',
        onPress: ()=>console.log('modal cancelled'),
        style:'cancel'
      },
      {
        text:'Logout',
        onPress:()=>onLogOut(),
        style:'destructive'
      }
    ])
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
        <Header title='Profile' mb={30}/>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Icon name={'logout'} color={theme.colors.rose} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={{gap:15}}>
          <View style={styles.avatarcontiner}>
            <Avatar
            uri={profileData?.image}
            size={hp(12)}
            rounded={theme.radius.xxl*1.4}
            />
            <Pressable style={styles.editIcon} onPress={()=>{navigation.navigate('editProfile')}}>
              <Icon name={'edit'} size={20} color={theme.colors.primaryDark}/>
            </Pressable>
          </View>
          <View style={{alignItems:'center',gap:4}}>
            <Text style={styles.userName}>{profileData && profileData.name}</Text>
             <Text style={styles.infoText}>{profileData && profileData.address}</Text>
          </View>
          <View style={{gap:10}}> 
              <View style={styles.info}> 
                <Icon name={'mail'} size={20} color={theme.colors.textLight}  />
                <Text style={styles.infoText}>{profileData && profileData.email}</Text>
              </View>
              {
                profileData && profileData.phoneNumber &&(
                  <View style={styles.info}> 
                <Icon name={'call'} size={20} color={theme.colors.textLight}  />
                <Text style={styles.infoText}>{profileData && profileData.phoneNumber}</Text>
                </View>
                )
              }
              {
                profileData && profileData.bio &&(
                  <View style={styles.info}> 
                
                <Text style={styles.infoText}>{profileData && profileData.bio}</Text>
                </View>
                )
              }
          </View>
        </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({

  container:{
    flex:1
  },

  logoutButton:{
    position:'absolute',
    right:0,
    padding:5,
    borderRadius:theme.radius.sm,
    backgroundColor:'#fee2e2'
  },
  avatarcontiner:{
    height:hp(12),
    width:hp(12),
    alignSelf:'center'
  },
  editIcon:{
    position:'absolute',
    bottom:0,
    right:-12,
    padding:7,
    borderRadius:50,
    backgroundColor:'white',
    shadowColor:theme.colors.textLight,
    shadowOffset:{width:0,height:4},
    shadowOpacity:0.4,
    shadowRadius:5,
    elevation:7,
  },
  userName:{
    fontSize:hp(3),
    fontWeight:500,
    color:theme.colors.textDark
    },
  infoText:{
    fontSize:hp(1.6),
    fontWeight:'500',
    color:theme.colors.textLight
  },
  info:{
    flexDirection:'row',
    alignItems:'center',
    gap:10
  }
})