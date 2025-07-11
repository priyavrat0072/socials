import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/login';
import SignUp from '../screens/signUp';
import Home from '../main/Home';
import Notification from '../main/Notification';
import Profile from '../main/Profile';
import NewPost from '../main/NewPost';
import EditProfile from '../main/EditProfile';

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export const HomeRoutes = () => {
  // console.log('props',props)
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        // children={() => <Home userProp={props} />}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="notification"
        component={Notification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="newPost"
        component={NewPost}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="editProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

export default AuthRoutes;

const styles = StyleSheet.create({});
