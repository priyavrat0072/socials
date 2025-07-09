import {firebase} from '@react-native-firebase/database'
import { Alert } from 'react-native'

export const getUserData=async(user)=>{
    try {
    console.log('User Id service-----',user.uid)
    const snapshot =  await firebase.database().ref(`users/${user.uid}`).once('value')
    const userProfile = snapshot.val()
    // console.log('userProfileService---------',userProfile)
    return userProfile
    } catch (error) {
        console.log(error,'Error in fetch userProfile in service class')
    }
}