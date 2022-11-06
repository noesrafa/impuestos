import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Donut} from 'react-native-donut-chart';
import {COLOR, FONTS, FSIZE} from '../../theme/appTheme';
import {AboutIcon} from '../../Icons';
import TaxesModal from '../TaxesModal';

const DashboardTaxes = ({
  isr,
  iva,
  isrRetenido,
  ivaRetenido,
  impuestos,
  setModalVisible,
  modalVisible,
}) => {
  const [gap, setGap] = useState(12);
  const [taxesModal, setTaxesModal] = useState(false);

  let data = [
    {
      value: isr,
      color: '#4576F6',
      title: 'ISR',
    },
    {
      value: iva,
      color: '#00B897',
      title: 'IVA',
    },
  ];

  useEffect(() => {
    if (isrRetenido !== 0 && ivaRetenido !== 0) {
      setGap(6);
    } else if (isrRetenido !== 0) {
      setGap(8);
    } else if (ivaRetenido !== 0) {
      setGap(8);
    }
  }, []);

  if (ivaRetenido !== 0) {
    data.push({
      value: ivaRetenido,
      color: '#C4EFE7',
      title: 'IVA Retenido',
    });
  }
  if (isrRetenido !== 0) {
    data.push({
      value: isrRetenido,
      color: '#D9E3FF',
      title: 'ISR Retenido',
    });
  }

  return (
    <View style={styles.container}>
      <TaxesModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setTaxesModal={setTaxesModal}
        taxesModal={taxesModal}
        title={'Impuestos del Mes'}
        description={'Es la cantidad de impuestos que tienes que pagar antes del 17 de cada mes para completar tu declaración.'}
        btnText={'Entiendo'}
      />
      <View>
        <Donut
          data={data}
          strokeWidth={16}
          radius={110}
          gap={gap}
          bgStrokeColor={'white'}
        />
        <View style={styles.taxes}>
          <TouchableOpacity
            style={styles.title}
            onPress={() => {
              setModalVisible(true);
              setTaxesModal(true);
            }}>
            <Text style={styles.titleText}>Impuestos</Text>
            <AboutIcon />
          </TouchableOpacity>
          <View style={styles.value}>
            <Text style={styles.valueNumber}>${impuestos[0]}</Text>
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
    marginBottom: 26,
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
    alignItems: 'center',
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
    // textTransform: 'uppercase',
  },
  scrollValue: {
    maxWidth: '80%',
    paddingVertical: 20,
  },
});
