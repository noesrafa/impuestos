import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {AboutIcon} from '../../Icons';
import {COLOR, FONTS, FSIZE} from '../../theme/appTheme';
import DashboardDetail from './DashboardDetail';
import AboutModal from '../AboutModal';

const DashboardMonth = ({
  ingresosTotales,
  gastosTotales,
  utilidad,
  gastosPercent,
  utilidadPercent,
  setModalVisible,
  modalVisible,
}) => {
  const detailStatus = utilidadPercent > 0;
  const [aboutModal, setAboutModal] = useState(false)

  return (
    <>
      <View style={styles.container}>
        <AboutModal
          aboutModal={aboutModal}
          setAboutModal={setAboutModal}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
          title="Ingresos Totales"
          description={
            'Es la suma de todos los ingresos que obtuviste durante el mes, no se consideran los gastos y en base a esto se calculan tus impuestos.'
          }
          btnText="Entiendo"
        />

          <TouchableOpacity onPress={() => {
            setModalVisible(true)
            setAboutModal(true)
          }}>
        <View style={styles.totalRevenue}>
          <Text style={styles.totalRevenueText}>Ingresos Totales</Text>
            <AboutIcon />
        </View>
          </TouchableOpacity>
        <View style={styles.totalRevenueValue}>
          <Text style={styles.totalRevenueValueNumber}>
            ${ingresosTotales[0]}
          </Text>
          <Text
            style={[styles.totalRevenueValueNumber, {color: COLOR.gray200}]}>
            .{ingresosTotales[1]}
          </Text>
        </View>
        <View style={styles.detailButton}>
          <DashboardDetail
            percent={gastosPercent}
            description={'Gastos Totales'}
            value={gastosTotales}
            positive={false}
          />
          <View style={styles.separator} />
          <DashboardDetail
            percent={utilidadPercent}
            description={utilidadPercent > 0 ? 'Utilidad' : 'Perdida'}
            value={utilidad}
            positive={detailStatus}
          />
        </View>
      </View>
    </>
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
    paddingBottom: 6,
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
  },
});
