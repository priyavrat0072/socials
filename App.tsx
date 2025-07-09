import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Welcome from './src/screens/Welcome';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './src/screens/login';
import Routes from './src/router/Routes';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes, { HomeRoutes } from './src/router/auth-navigation';
import auth from '@react-native-firebase/auth';



const App = () => {
  const [user, setUser] = useState<any>('');

   


  useEffect(() => {
      const userCheck = auth().onAuthStateChanged(userExist => {
      if (userExist) setUser(userExist);
      else setUser('');
    });
    return () => {
      userCheck();
    };
  }, []);

  // useEffect(()=>{
  //   console.log('userAuth----------',user)
  // },[user])



  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {user !== "" ? <HomeRoutes userData={user}/> : <AuthRoutes/>}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
