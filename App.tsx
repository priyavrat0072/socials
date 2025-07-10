import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Welcome from './src/screens/Welcome';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './src/screens/login';
// import Routes from './src/router/Routes';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes, { HomeRoutes } from './src/router/auth-navigation';
import auth from '@react-native-firebase/auth';
import { getUserData } from './src/services/userService';



const App = () => {
  const [user, setUser] = useState<any>(null);
  const [userData,setUserData] = useState(null)
  const [initializating,setInitializating] = useState(true)
  
  // console.log('user---',user)
  // console.log('userData---',userData)
  
  useEffect(() => {
    // const userCheck = auth().onAuthStateChanged(userExist => {
    //   if (userExist) setUser(userExist);
    //   else setUser('');
    // });
    // return () => {
    //   userCheck();
    // };

    const unsubscribe = auth().onAuthStateChanged(async (userExist)=>{
      setUser(userExist)

      if(userExist){
        const fetchedData = await getUserData(userExist);
        setUserData(fetchedData)
      }else{
        setUserData(null)
      }
      setInitializating(false);
    })
    return ()=>unsubscribe();
  }, []);


  if(initializating) return null

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {user  ? <HomeRoutes userData={userData}/> : <AuthRoutes/>}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
