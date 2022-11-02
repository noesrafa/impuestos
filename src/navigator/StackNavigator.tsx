/* eslint-disable */
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import * as React from 'react';
import SplashScreen from '../screens/SplashScreen';
import AuthScreen from '../screens/AuthScreen';


const Stack = createStackNavigator();

function StackNavigator() {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator