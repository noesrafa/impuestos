import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {LogoIcon, RightArrowIcon} from '../Icons';
import {COLOR, FONTS, FSIZE} from '../theme/appTheme';

const AuthScreen = ({navigation}) => {
    const [code, setCode] = useState('');
    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

  const triggerSearch = () => {
    if (code !== '') {
      console.log('codigo', code);
      navigation.replace('HomeScreen');
    } else {
      showAlert("Este campo es obligatorio.");
    }
  };

  function showAlert(message:string) {
    setAlertMessage(message)
    setTimeout(() => {
        setAlertMessage('')
    }, 3000);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoIcon />
        <View style={styles.skip}>
          <Text style={styles.skipText}>Omitir</Text>
          <RightArrowIcon />
        </View>
      </View>
      <Text style={styles.title}>Escribe tu código{'\n'}de acceso</Text>
      <TextInput
        style={styles.input}
        autoFocus
        onSubmitEditing={triggerSearch}
        onChangeText={value => setCode(value)}
      />
      <Text style={styles.alertText}>{alertMessage}</Text>
      <TouchableOpacity style={styles.next} onPress={triggerSearch}>
        <Text
          style={[
            styles.nextText,
            {
              backgroundColor: code !== '' ? COLOR.principal : '#E0E3ED',
              color: code !== '' ? 'white' : COLOR.gray200,
            },
          ]}>
          Continuar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skip: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  skipText: {
    fontFamily: FONTS.regular,
    fontSize: FSIZE.md,
    marginRight: 8,
    color: COLOR.gray300,
  },
  title: {
    fontFamily: FONTS.medium,
    color: 'black',
    fontSize: FSIZE.bg,
    lineHeight: 44,
    paddingTop: 12,
    marginTop: 40,
  },
  input: {
    fontFamily: FONTS.light,
    color: 'black',
    fontSize: FSIZE.md2,
    lineHeight: 44,
    paddingTop: 12,
    textDecorationLine: 'none',
    textDecorationColor: '#fff',
    height: 200,
  },
  next: {
    position: 'absolute',
    bottom: 0,
    margin: 20,
    width: '100%',
  },
  nextText: {
    fontFamily: FONTS.medium,
    color: COLOR.gray300,
    fontSize: FSIZE.md,
    backgroundColor: COLOR.principal,
    textAlign: 'center',
    paddingVertical: 16,
    borderRadius: 100,
  },
  alertText: {
    top: -60,
    fontFamily: FONTS.regular,
    color: COLOR.red,
    fontSize: FSIZE.md,
  },
});
