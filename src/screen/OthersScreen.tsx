import React from 'react';
import { SafeAreaView, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Avatar } from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AppTitle from '../components/AppTitle';
import DefaultContainer from '../components/DefaultContainer';
import InnerContainer from '../components/InnerContainer';
import SubTitle from '../components/SubTitle';
import { AVATAR_URI, MEDIA } from '../utils/constant';
import { safeAreaViewStyle } from '../utils/styles';

const OthersScreen = () => {
  return (
    <SafeAreaView style={safeAreaViewStyle.default}>
      <DefaultContainer>
        <InnerContainer>
          <AppTitle />
          <SubTitle subtitle="Misc" />
          <Avatar
            source={{
              uri: AVATAR_URI,
            }}
            rounded
            size="xlarge"
          />
          <Text style={{ marginVertical: 20, fontSize: 30 }}>Developed with love</Text>
          <ScrollView
            style={{
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: 'row',
                marginVertical: 10,
              }}
              onPress={() => Linking.openURL(MEDIA.LINKEDIN)}
            >
              <FontAwesome5Icon name="linkedin" size={20} />
              <Text style={{ marginLeft: 20, fontSize: 18 }}>Connect with me in LinkedIn</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: 'row',
                marginVertical: 10,
              }}
              onPress={() => Linking.openURL(MEDIA.GITHUB)}
            >
              <FontAwesome5Icon name="github" size={20} />
              <Text style={{ marginLeft: 20, fontSize: 18 }}>Follow me in Github</Text>
            </TouchableOpacity>
          </ScrollView>
        </InnerContainer>
      </DefaultContainer>
    </SafeAreaView>
  );
};

export default OthersScreen;
