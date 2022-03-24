import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLOR_PALETTE } from '../utils/constant';

const AppTitle: React.FC = () => {
  return <Text style={styles.title}>KAPALAN</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: COLOR_PALETTE.DEEP_BLUE['400'],
    fontWeight: '700',
  },
});

export default AppTitle;
