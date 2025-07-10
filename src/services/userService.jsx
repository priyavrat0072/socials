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