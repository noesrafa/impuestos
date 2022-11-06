import {useQuery} from '@apollo/client';

import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ObtenerAnalisis} from '../Queries';
import HomeScreen from '../screens/HomeScreen';
import {COLOR} from '../theme/appTheme';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {decode} from 'react-native-pure-jwt';

const ApolloLoader = () => {
  const {data, loading, error} = useQuery(ObtenerAnalisis, {
    fetchPolicy: 'no-cache',
  });

  const [nombre, setNombre] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('token');
        if (value !== null) {
          decode(
            value, // the token
            'palabrasecreta', // the secret
            {
              skipValidation: true, // to skip signature and exp verification
            },
          )
            .then(e => setNombre(e.payload.nombre)) // already an object. read below, exp key note
            .catch(console.error);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  const splitName = name => {
    const split = name.split(' ');
    return split[0] + '\n' + split[1];
  };

  // ========== lOADING ============
  if (loading) {
    return (
      <View style={styles.container}>
        <Text> </Text>
      </View>
    );
  }
  // ========= DATA ===========
  if (data) {
    let lastMonth = data.obtenerAnalisis[data.obtenerAnalisis.length - 1];
    const {
      mes,
      year,
      ingresosTotales,
      gastosTotales,
      isr,
      iva,
      isrRetenido,
      ivaRetenido,
    } = lastMonth;

    let dollarUSLocale = Intl.NumberFormat('en-US');
    const ingresosTotalesF = dollarUSLocale.format(ingresosTotales).split('.');
    const gastosTotalesF = dollarUSLocale.format(gastosTotales).split('.');

      const resta = (ingresosTotales - gastosTotales).toFixed(2);
      const utilidad = resta.toString().split(".")

      const impuestos = (isr + iva + isrRetenido + ivaRetenido).toFixed(2).split(".");

      const gastosPercent = Math.floor((gastosTotales * 100) / ingresosTotales)
      const utilidadPercent = Math.ceil((Number(resta) * 100) / ingresosTotales)
    
    return (
      <>
        <HomeScreen
          mes={mes}
          año={year}
          nombre={splitName(nombre)}
          ingresosTotales={ingresosTotalesF}
          gastosTotales={gastosTotalesF}
          utilidad={utilidad}
          isr={isr}
          iva={iva}
          isrRetenido={isrRetenido}
          ivaRetenido={ivaRetenido}
          impuestos={impuestos}
          gastosPercent={gastosPercent}
          utilidadPercent={utilidadPercent}
        />
      </>
    );
  }

  // ========== ERROR ===========
  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }
};

export default ApolloLoader;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLOR.background},
});
