import React from 'react';
import { TouchableWithoutFeedback, SafeAreaView, Modal, Text, View } from 'react-native';
import { COLOR_PALETTE } from '../../utils/constant';

const HarbourModal: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <SafeAreaView>
      <Modal visible={isOpen} transparent={true} style={{ flex: 1 }} animationType="fade">
        <TouchableWithoutFeedback onPress={onClose}>
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              flex: 1,
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <View
              style={{
                flex: 0.75,
                margin: 20,
                padding: 20,
                backgroundColor: 'white',
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  textAlign: 'center',
                  color: COLOR_PALETTE.DEEP_BLUE['200'],
                }}
              >
                HarbourModal
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default HarbourModal;
