import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AboutIcon} from '../../Icons';
import {COLOR, FONTS, FSIZE} from '../../theme/appTheme';
import DashboardDetail from './DashboardDetail';

const DashboardMonth = () => {
  return (
    <View style={styles.container}>
      <View style={styles.totalRevenue}>
        <Text style={styles.totalRevenueText}>Ingresos Totales</Text>
        <AboutIcon />
      </View>
      <View style={styles.totalRevenueValue}>
        <Text style={styles.totalRevenueValueNumber}>$199,154</Text>
        <Text style={[styles.totalRevenueValueNumber, {color: COLOR.gray200}]}>
          .81
        </Text>
      </View>
      <View style={styles.detailButton}>
        <DashboardDetail
          percent={99}
          description={'Gastos Totales'}
          value={'198,822'}
          positive={false}
        />
        <View style={styles.separator}/>
        <DashboardDetail
          percent={1}
          description={'Utilidad'}
          value={'2,332'}
          positive={true}
        />
      </View>
    </View>
  );
};

export default DashboardMonth;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.white,
    marginTop: 20,
    paddingVertical: 28,
    paddingHorizontal: 10,
    borderRadius: 16,
  },
  totalRevenue: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    marginLeft: 10,
  },
  totalRevenueText: {
    fontFamily: FONTS.regular,
    color: COLOR.black,
    fontSize: FSIZE.md,
    marginRight: 6,
  },
  totalRevenueValue: {
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 8,
  },
  totalRevenueValueNumber: {
    fontFamily: FONTS.medium,
    color: COLOR.black,
    fontSize: FSIZE.bg2,
  },
  detailButton: {
    flexDirection: 'row',
  },
  separator: {
    width: 10,
  }
});
