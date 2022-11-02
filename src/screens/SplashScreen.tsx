/* eslint-disable */
import { Button, StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { SplashLogoIcon } from '../Icons'

const SplashScreen = ({navigation}) => {
 React.useEffect(() => {
    setTimeout(() => {
        navigation.replace('AuthScreen')
    }, 1500)
 }, [])
    
  return (
    <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <SplashLogoIcon />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#00B897",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})