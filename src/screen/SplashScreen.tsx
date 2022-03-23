import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, View } from 'react-native';
import {} from 'react-native-elements';
import { safeAreaViewStyle } from '../utils/styles';

const SplashScreen = ({}) => {
  const [isLoading, setIsLoading] = useState(true);
  const timerRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    // Clear timeout reference
    timerRef.current && clearTimeout(timerRef.current);
  }, [isLoading]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <SafeAreaView style={safeAreaViewStyle.default}>
      <View></View>
    </SafeAreaView>
  );
};

export default SplashScreen;
