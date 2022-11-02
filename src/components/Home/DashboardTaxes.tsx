import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Donut} from 'react-native-donut-chart';
import {COLOR, FONTS, FSIZE} from '../../theme/appTheme';
import {AboutIcon} from '../../Icons';

const data = [
  {
    value: 5433.24,
    color: '#0F52FF',
    title: 'ISR',
  },
  {
    value: 25533.15,
    color: '#D9E3FF',
    title: 'IVA',
  },
];

const DashboardTaxes = () => {
  return (
    <View style={styles.container}>
      <View>
        <Donut
          data={data}
          strokeWidth={16}
          radius={110}
          gap={12}
          bgStrokeColor={'white'}
        />
        <View style={styles.taxes}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Impuestos</Text>
            <AboutIcon />
          </View>
          <View style={styles.value}>
            <Text style={styles.valueNumber}>$30,034</Text>
            <Text style={[styles.valueNumber, {color: COLOR.gray200}]}>
              .53
            </Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollValue} horizontal>
        {data.map(item => (
          <View style={styles.valuesWrapper} key={item.value}>
            <View style={[styles.colorDot, {backgroundColor: item.color}]} />
            <View>
              <Text style={styles.detailValue}>${item.value}</Text>
              <Text style={styles.detailValueTitle}>{item.title}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DashboardTaxes;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.white,
    marginTop: 20,
    paddingVertical: 28,
    paddingHorizontal: 10,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 26
  },
  taxes: {
    alignItems: 'center',
    position: 'absolute',
    // backgroundColor: "red",
    width: 220,
    height: 220,
    justifyContent: 'center',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    marginRight: 4,
    fontFamily: FONTS.regular,
    color: COLOR.black,
    fontSize: FSIZE.md,
  },
  value: {
    flexDirection: 'row',
  },
  valueNumber: {
    fontSize: FSIZE.md2,
    fontFamily: FONTS.medium,
    color: COLOR.black,
    marginTop: 6,
  },
  valuesWrapper: {
    flexDirection: 'row',
    alignItems: "center",
    marginRight: 30,
  },
  colorDot: {
    width: 10,
    height: 10,
    borderRadius: 40,
    marginRight: 12,
  },
  detailValue: {
    fontSize: FSIZE.md,
    fontFamily: FONTS.medium,
    color: COLOR.black,
  },
  detailValueTitle: {
    fontSize: FSIZE.md,
    fontFamily: FONTS.medium,
    color: COLOR.gray300,
    textTransform: 'uppercase',
  },
  scrollValue: {
    maxWidth: "70%",
    paddingVertical: 20
  }
});
