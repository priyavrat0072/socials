import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes, { HomeRoutes } from './auth-navigation';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
 
        <Stack.Navigator>
            <Stack.Screen
                name = "AuthRoutes"
                component={AuthRoutes}
                options={{headerShown:false}}
            />
            <Stack.Screen
              name='home'
              component={HomeRoutes}
              options={{headerShown:false}}
            />
        </Stack.Navigator>
    
  );
};

export default Routes;

const styles = StyleSheet.create({});
