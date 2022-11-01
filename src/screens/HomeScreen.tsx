import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {DownArrowIcon} from '../Icons';
import {COLOR, FONTS, FSIZE} from '../theme/appTheme';
import DashboardMonth from '../components/Home/DashboardMonth';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userName}>
        <Text style={styles.userNameText}>Adolfo{'\n'}Fernández</Text>
        <View style={styles.month}>
          <Text style={styles.monthText}>Sep 2022</Text>
          <DownArrowIcon />
        </View>
      </View>
      <DashboardMonth />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -10,
    paddingHorizontal: 20,
  },
  userName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  userNameText: {
    fontFamily: FONTS.medium,
    color: 'black',
    fontSize: FSIZE.bg,
    lineHeight: 44,
    paddingTop: 12,
  },
  month: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  monthText: {
    fontFamily: FONTS.semibold,
    color: COLOR.link,
    fontSize: FSIZE.md,
    marginRight: 10,
  },
});
