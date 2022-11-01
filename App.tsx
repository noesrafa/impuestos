/* eslint-disable */
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { COLOR, FONTS } from './src/theme/appTheme'
import HomeScreen from './src/screens/HomeScreen'
import Header from './src/components/Header'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'}/>
      <Header />
      <HomeScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: COLOR.background,
  }
})