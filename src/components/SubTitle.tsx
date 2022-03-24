import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const SubTitle: React.FC<Props> = ({ subtitle }) => {
  return (
    <View>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 10,
  },
});

type Props = {
  subtitle: string;
};

export default SubTitle;
