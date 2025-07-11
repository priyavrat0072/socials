import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Welcome from './src/screens/Welcome';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './src/screens/login';
// import Routes from './src/router/Routes';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes, { HomeRoutes } from './src/router/auth-navigation';
import auth from '@react-native-firebase/auth';
import { getUserData } from './src/services/userService';
import { UserProvider, UserContext } from './src/context/UserProvider';

const AppInner = () => {
  const [user, setUser] = useState<any>(null);
  // const [userData,setUserData] = useState(null)
  const [initializating, setInitializating] = useState(true);
  const { userProviderContext, setUserProviderContext } = useContext(UserContext);

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

    const unsubscribe = auth().onAuthStateChanged(async userExist => {
      setUser(userExist);

      if (userExist) {
        const fetchedData = await getUserData(userExist);
        // setUserData(fetchedData)
        setUserProviderContext(fetchedData);
      } else {
        // setUserData(null)
        setUserProviderContext(null);
      }
      setInitializating(false);
    });
    return () => unsubscribe();
  }, []);

  if (initializating) return null;

  return (
    <NavigationContainer>
      {user ? <HomeRoutes/> : <AuthRoutes />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <UserProvider>
        <AppInner />
      </UserProvider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
