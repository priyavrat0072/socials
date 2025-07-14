import {firebase} from '@react-native-firebase/database'
import { Alert } from 'react-native'

export const getUserData=async(user)=>{
    try {
    const snapshot =  await firebase.database().ref(`users/${user.uid}`).once('value')
    const userProfile = snapshot.val()
    return userProfile
    } catch (error) {
        console.log(error,'Error in fetch userProfile in service class')
    }
}

export const updateUserData=async(user,userData)=>{
    try {
      await firebase.database().ref(`users/${user.uid}`).update(userData)
      let response = await getUserData(user)
      return response  
    } catch (error) {
         console.log(error,'Error in updating userProfile in service class')
    }
}