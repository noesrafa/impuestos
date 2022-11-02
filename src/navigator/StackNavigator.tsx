/* eslint-disable */
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import * as React from 'react';
import SplashScreen from '../screens/SplashScreen';


const Stack = createStackNavigator();

function StackNavigator() {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator