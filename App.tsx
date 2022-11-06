/* eslint-disable */
import SplashScreen from 'react-native-splash-screen';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import React from 'react';
import {COLOR} from './src/theme/appTheme';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';



const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();

    
  }, []);

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLOR.background,
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <StackNavigator />
      </View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.background,
  },
});
