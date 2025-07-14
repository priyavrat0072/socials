import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Header from '../components/Header'
import { hp, wp } from '../helpers/comman'
import { UserContext } from '../context/UserProvider'
import { getUserImageSrc } from '../services/imageService'
import { theme } from '../constants/theme'
import Icon from '../assets/icons'
import Input from '../components/Input'
import Button from '../components/Button'
import { updateUserData } from '../services/userService'
import { useNavigation } from '@react-navigation/native'

const EditProfile = () => {

  const navigation = useNavigation()
  const {userProviderContext, setUserProviderContext} = useContext(UserContext)
  const [loading,setLoading] = useState(false)
  const [user, setUser] = useState({
    name:'',
    phoneNumber:'',
    image:'',
    bio:'',
    address:''
  })

  useEffect(()=>{
    if(userProviderContext){
      setUser({
        name:userProviderContext.name || '',
        phoneNumber:userProviderContext.phoneNumber || '',
        image:userProviderContext.image || '',
        bio:userProviderContext.bio || '',
        address:userProviderContext.address || '',
      })
    }
  },[userProviderContext])
  
  const onImagePick=async()=>{}

  const onSubmit=async()=>{
      let userData = {...user}
      let {name,phoneNumber,address,bio,image} = userData
      if(!name || !phoneNumber || !address || !bio){
        Alert.alert('Profile',"Please fill all details")
        return;
      }
      setLoading(true)
      // Update User

      const res = await updateUserData(userProviderContext,userData)
      setLoading(false)
      setUserProviderContext({...userProviderContext,...userData})
      navigation.goBack()
  }


  let imageSource = getUserImageSrc(user.image)


  return (
    <ScreenWrapper bg={'white'}>
        <View style={styles.container}>
          <ScrollView style={{flex:1}}>
              <Header title={'Edit Profile'} />
              <View style={styles.form}>
                <View style={styles.avatarContainer}>
                  <Image source={imageSource} style={styles.avatar} />
                  <Pressable style={styles.cameraIcon} onPress={onImagePick}>
                    <Icon name={'camera'} size={20} color={theme.colors.primaryDark}/>
                  </Pressable>
                </View>
                <Text style={{fontSize:hp(1.5),color:theme.colors.text}}> 
                  Please fill your profile details
                </Text>
                <Input
                  icon={<Icon name={'user'} color={theme.colors.primaryDark} />}
                  placeholder = 'Enter Your Name'
                  value = {user.name}
                  onChangeText={value=>setUser({...user,name:value})}
                />
                <Input
                  icon={<Icon name={'call'} color={theme.colors.primaryDark} />}
                  placeholder = 'Enter Your Phone Number'
                  value = {user.phoneNumber}
                  onChangeText={value=>setUser({...user,phoneNumber:value})}
                />
                <Input
                  icon={<Icon name={'location'} color={theme.colors.primaryDark} />}
                  placeholder = 'Enter Your Address'
                  value = {user.address}
                  onChangeText={value=>setUser({...user,address:value})}
                />
                <Input
                  placeholder = 'Enter Your Bio'
                  multiline={true}
                  containerStyle = {styles.bio}
                  value = {user.bio}
                  onChangeText={value=>setUser({...user,bio:value})}
                />
                <Button title={'Update'} loading={loading} onPress={onSubmit}  />

              </View>
          </ScrollView>
        </View>
    </ScreenWrapper>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:wp(4)
  },
  avatarContainer:{
    height:hp(14),
    width:hp(14),
    alignSelf:'center'
  },
  avatar:{
    width:'100%',
    height:'100%',
    borderRadius:theme.radius.xxl*1.8,
    borderCurve:'continuous',
    borderWidth:1,
    borderColor:theme.colors.darkLight,
  },
  cameraIcon:{
    position:'absolute',
    bottom:0,
    right:-10,
    padding:8,
    borderRadius:50,
    backgroundColor:'white',
    shadowColor:theme.colors.textLight,
    shadowOffset:{width:0,height:4},
    shadowOpacity:0.4,
    shadowRadius:5,
    elevation:7
  },
  form:{
    gap:18,
    marginTop:20
  },
  input:{
    flexDirection:'row',
    borderWidth:0.4,
    borderColor:theme.colors.text,
    borderRadius:theme.radius.xxl,
    borderCurve:'continuous',
    padding:17,
    paddingHorizontal:20,
    gap:15,
  },
  bio:{
    flexDirection:'row',
    height:hp(15),
    alignItems:'flex-start',
    paddingVertical:15
  }

})