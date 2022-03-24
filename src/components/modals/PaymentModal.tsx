import React from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLOR_PALETTE } from '../../utils/constant';

const PaymentModal: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal visible={isOpen} transparent animationType="fade">
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPressOut={onClose} activeOpacity={1} style={{ flex: 1 }}>
          <View style={styles.mainContainer}>
            <View style={styles.modalContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.modalTitle}>Success!</Text>
              </View>
              <View style={styles.informationContainer}>
                <Text style={styles.modalInformation}>SILAHKAN TRANSFER KE REKENING</Text>
                <Text style={styles.modalInformation}>150XXX</Text>
                <Text style={styles.modalInformation}>a.n Muhammad Firdaus Sati</Text>
              </View>
              <Button
                title={'Tutup'}
                containerStyle={{ width: '80%', padding: 5 }}
                buttonStyle={{
                  width: '100%',
                  backgroundColor: COLOR_PALETTE.DEEP_BLUE['200'],
                }}
                icon={<FontAwesome5 name="ship" size={22} color={'white'} />}
                onPress={onClose}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.65)',
    flex: 1,
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  titleContainer: {
    padding: 10,
    backgroundColor: COLOR_PALETTE.LIGHT_BLUE['300'],
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  modalTitle: {
    color: COLOR_PALETTE.DEEP_BLUE['300'],
    fontWeight: '700',
    fontSize: 18,
  },
  informationContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalInformation: {
    color: COLOR_PALETTE.DEEP_BLUE['400'],
    fontWeight: '600',
    fontSize: 16,
  },
});

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default PaymentModal;
