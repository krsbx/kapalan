import React from 'react';
import { View, StyleSheet } from 'react-native';

const InnerContainer: React.FC = ({ children }) => {
  return <View style={styles.default}>{children}</View>;
};

const styles = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    margin: '5%',
    padding: 20,
    borderRadius: 25,
  },
});

export default InnerContainer;
