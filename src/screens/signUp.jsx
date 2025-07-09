import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import HomeIcon from '../assets/icons/HomeIcon';
import { theme } from '../constants/theme';
import Icon from '../assets/icons';
import BackButton from '../components/BackButton';
import { useNavigation } from '@react-navigation/native';
import { hp, wp } from '../helpers/comman';
import Input from '../components/Input';
import Button from '../components/Button';
import auth from '@react-native-firebase/auth'
import firestore, { serverTimestamp } from '@react-native-firebase/firestore'
import {firebase} from '@react-native-firebase/database'


const SignUp = () => {
  const navigation = useNavigation();
  const [email , setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name,setName] = useState("")
  const [loading,setLoading] = useState(false)

  const onSubmit = async () => {
  if (!email || !password || !name) {
    Alert.alert('Sign Up', 'Please fill all fields!');
    return;
  }

  setLoading(true);
  try {
    const newReg = await auth().createUserWithEmailAndPassword(email, password);
    
    // FIREBASE DATABASE
    // firestore().collection('users').doc(newReg.user.uid).set({
    //   name: name,
    //   email: newReg.user.email,
    //   uid: newReg.user.uid,
    //   image:null,
    //   bio:null,
    //   address:null,
    //   phoneNumber:null,
    //   createAt: serverTimestamp()
    // });

    // REALTIME DATABASE
    firebase.database().ref(`users/${newReg.user.uid}`).set({
        name:name,
        email:email,
        uid : newReg.user.uid,
        image:'',
        bio:'',
        address:'',
        phoneNumber:'',
        createAt: new Date().toISOString()
    })


    console.log('Registration Successful');
    Alert.alert('Success', 'User registered successfully!');

  } catch (error) {
    console.error('Registration Unsuccessful:', error);
     Alert.alert('Registration failed!'); 
  }finally{
      setLoading(false)
    }

};

  return (
    <ScreenWrapper bg={'white'}>
      <View style={styles.container}>
        <BackButton navigation={navigation} />
        {/* welcome Text */}
        <View>
          <Text style={styles.welcomeText}>Let's</Text>
          <Text style={styles.welcomeText}>Get Started</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            Please fill details to create an account
          </Text>
          <Input
            icon={<Icon name="user" size={26} />}
            placeholder="Enter Your username"
            onChangeText={setName}
          />
          <Input
            icon={<Icon name="mail" size={26} />}
            placeholder="Enter Your email"
            onChangeText={setEmail}
          />
          <Input
            icon={<Icon name="lock" size={26} />}
            placeholder="Enter Your password"
            secureTextEntry
            onChangeText={setPassword}
          />
          
          {/* button */}
          <Button title={'Sign Up'} loading={loading} onPress={onSubmit}/>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already have an account?
          </Text>
          <Pressable onPress={()=>navigation.navigate('login')}>
            <Text style={[styles.footerText,{color:theme.colors.primaryDark , fontWeight:theme.fonts.semibold}]}>Login</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: 'right',
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  footerText: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});
