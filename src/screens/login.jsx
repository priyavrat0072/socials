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
import firestore from '@react-native-firebase/firestore'

const Login = () => {
  const navigation = useNavigation();

  const [email , setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading,setLoading] = useState(false)

  

  const onSubmit=async()=>{
    if(!email || !password){
      Alert.alert('Login',"Please fill all fields!")
      return;
    }
    setLoading(true)
    try {
      const newReg = await auth().signInWithEmailAndPassword(email,password);
      // navigation.navigate("home")
       console.log('Sign in done')
       Alert.alert('Login successfully!');
       return newReg;
    } catch (error) {
      console.log('Login Failed');
       Alert.alert('Login failed!');
    }finally{
      setLoading(false)
    }
  }
  
  return (
    <ScreenWrapper bg={'white'}>
      <View style={styles.container}>
        <BackButton navigation={navigation} />
        {/* welcome Text */}
        <View>
          <Text style={styles.welcomeText}>Hey,</Text>
          <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            Please login to continue
          </Text>
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
          <Text style={styles.forgotPassword}>
            Forgot Password?
          </Text>
          {/* button */}
          <Button title={'Login'} loading={loading} onPress={onSubmit}/>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account?
          </Text>
          <Pressable onPress={()=>navigation.navigate('signUp')}>
            <Text style={[styles.footerText,{color:theme.colors.primaryDark , fontWeight:theme.fonts.semibold}]}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

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
