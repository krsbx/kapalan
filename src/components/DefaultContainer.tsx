import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLOR_PALETTE } from '../utils/constant';

const DefaultContainer: React.FC = ({ children }) => {
  return <View style={styles.defautl}>{children}</View>;
};

const styles = StyleSheet.create({
  defautl: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLOR_PALETTE.LIGHT_BLUE['200'],
  },
});

export default DefaultContainer;
