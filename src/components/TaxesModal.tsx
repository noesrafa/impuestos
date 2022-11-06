import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR, FONTS, FSIZE} from '../theme/appTheme';

const TaxesModal = ({
  modalVisible,
  setModalVisible,
  setTaxesModal,
  taxesModal,
  title,
  description,
  btnText,
}) => {
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={taxesModal}
        onRequestClose={() => {
          setTaxesModal(!taxesModal);
          setModalVisible(!modalVisible);
        }}>
          
        <TouchableOpacity style={styles.modalContainer} onPress={() => {
              setTaxesModal(!taxesModal);
              setModalVisible(!modalVisible);
            }}>
          <Text style={styles.modalTitle}>{title}</Text>
          <View style={styles.modalDivider} />
          <Text style={styles.modalDescription}>{description}</Text>
          <TouchableOpacity
            style={styles.modalClose}
            onPress={() => {
              setTaxesModal(!taxesModal);
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.modalCloseText}>{btnText}</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default TaxesModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 24,
    paddingVertical: 32,
    width: '100%',
    borderRadius: 20,
  },
  modalTitle: {
    fontFamily: FONTS.bold,
    fontSize: FSIZE.md1,
    color: 'black',
  },
  modalDivider: {
    width: '100%',
    height: 2,
    backgroundColor: COLOR.background,
    marginTop: 16,
  },
  modalDescription: {
    fontFamily: FONTS.regular,
    fontSize: FSIZE.md,
    color: 'black',
    marginTop: 16,
    lineHeight: 24,
  },
  modalClose: {
    backgroundColor: COLOR.principal,
    borderRadius: 100,
    paddingVertical: 18,
    marginTop: 28,
    alignItems: 'center',
  },
  modalCloseText: {
    color: 'white',
    fontFamily: FONTS.medium,
    fontSize: FSIZE.md,
  },
});
