/* eslint-disable */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BellIcon, LogoIcon, UserIcon} from '../Icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <LogoIcon />
      <View style={styles.optionWrapper}>
        <View style={styles.user}>
          <UserIcon />
        </View>
        <BellIcon />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 26,
    alignItems: 'center'
    // backgroundColor: "red"
  },
  optionWrapper: {
    flexDirection: 'row',
  },
  user: {
    marginRight: 22
  },
});
