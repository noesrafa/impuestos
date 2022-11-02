import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR, FONTS, FSIZE} from '../../theme/appTheme';
import { AngleArrowIcon } from '../../Icons';


interface Props {
  percent: number;
  description: string;
  value: string;
  positive: boolean;
}

const DashboardDetail = ({percent, description, value, positive}: Props) => {
  return (
    <TouchableOpacity style={styles.container} >
      <View
        style={[
          styles.percent,
          {backgroundColor: positive ? COLOR.lightGreen : COLOR.lightRed},
        ]}>
        <Text
          style={[
            styles.percentText,
            {color: positive ? COLOR.green : COLOR.red},
          ]}>
          {percent}%
        </Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{description}</Text>
        <AngleArrowIcon />
      </View>
      <View style={styles.totalValue}>
        <Text style={styles.totalValueNumber}>${value}</Text>
        <Text style={[styles.totalValueNumber, {color: COLOR.gray200}]}>
          .81
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DashboardDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    alignItems: 'flex-start',
  },
  percent: {
    backgroundColor: COLOR.lightRed,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignContent: 'center',
  },
  percentText: {
    fontFamily: FONTS.bold,
    color: COLOR.red,
    fontSize: FSIZE.sm2,
  },
  description: {
    flexDirection: 'row',
    alignItems: "center",
    marginTop: 10,
  },
  descriptionText: {
    fontFamily: FONTS.regular,
    color: COLOR.black,
    fontSize: FSIZE.sm,
    marginRight: 6,
  },
  totalValue: {
    flexDirection: 'row',
  },
  totalValueNumber: {
    fontSize: FSIZE.md2,
    fontFamily: FONTS.medium,
    color: COLOR.black,
    marginTop: 6,
  },
});
