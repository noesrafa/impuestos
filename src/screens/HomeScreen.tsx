import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DownArrowIcon} from '../Icons';
import {COLOR, FONTS, FSIZE} from '../theme/appTheme';
import DashboardMonth from '../components/Home/DashboardMonth';
import DashboardTaxes from '../components/Home/DashboardTaxes';
import Header from '../components/Header';

const HomeScreen = ({
  navigation,
  mes,
  año,
  nombre,
  ingresosTotales,
  gastosTotales,
  utilidad,
  isr,
  iva,
  isrRetenido,
  ivaRetenido,
  impuestos,
  gastosPercent,
  utilidadPercent
}) => {

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <View style={styles.userName}>
          <Text style={styles.userNameText}>{nombre}</Text>
          <View style={styles.month}>
            <Text style={styles.monthText}>{mes} {año}</Text>
            <DownArrowIcon />
          </View>
        </View>
        <DashboardMonth
          ingresosTotales={ingresosTotales}
          gastosTotales={gastosTotales}
          utilidad={utilidad}
          gastosPercent={gastosPercent}
          utilidadPercent={utilidadPercent}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
        <Text style={styles.sectionTitleText}>Impuestos del mes</Text>
        <DashboardTaxes
          isr={isr}
          iva={iva}
          isrRetenido={isrRetenido}
          ivaRetenido={ivaRetenido}
          impuestos={impuestos}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      </ScrollView>
      {modalVisible && (
        <View style={styles.blackOpacity} />
        )}
    </>
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
  sectionTitleText: {
    fontFamily: FONTS.medium,
    color: 'black',
    fontSize: FSIZE.md1,
    marginTop: 24,
  },
  blackOpacity: {
    backgroundColor: "black",
    opacity: 0.3,
    width: 1200,
    height: 1200,
    position: 'absolute',
    zIndex:100,
  }
});
