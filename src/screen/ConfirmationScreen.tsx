import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { connect, ConnectedProps } from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AppTitle from '../components/AppTitle';
import DefaultContainer from '../components/DefaultContainer';
import DetailContainer from '../components/DetailContainer';
import InnerContainer from '../components/InnerContainer';
import { RootState } from '../store';
import { getBooking } from '../store/selectors/booking';
import { COLOR_PALETTE } from '../utils/constant';
import { IBookingScreenProps } from '../utils/interface';
import { safeAreaViewStyle } from '../utils/styles';

const ConfirmationScreen: React.FC<Props> = ({ booking, navigation }) => {
  return (
    <SafeAreaView style={safeAreaViewStyle.default}>
      <DefaultContainer>
        <InnerContainer>
          <AppTitle />
          <View style={styles.mainContainer}>
            <Text style={styles.subTitle}>Kuota Tersedia (99999)</Text>
            <Text style={styles.subTitle}>Rincian Tiket</Text>
            <DetailContainer booking={booking} />
            <View style={styles.bottomContainer}>
              <Button
                title={'Kembali'}
                {...buttonStyles}
                onPress={navigation.goBack}
                icon={
                  <FontAwesome5
                    name="arrow-left"
                    size={20}
                    style={{
                      marginRight: 10,
                      color: 'white',
                    }}
                  />
                }
              />
              <Button
                title={'Lanjutkan'}
                {...buttonStyles}
                onPress={() => navigation.push('Payment', {})}
              />
            </View>
          </View>
        </InnerContainer>
      </DefaultContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    marginVertical: 10,
  },
  subTitle: {
    color: 'rgba(0,0,0,0.65)',
    fontSize: 18,
    fontWeight: '600',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 10,
    width: '100%',
  },
});

const buttonStyles = StyleSheet.create({
  buttonStyle: {
    width: '90%',
    backgroundColor: COLOR_PALETTE.DEEP_BLUE['200'],
  },
  containerStyle: {
    alignItems: 'center',
    flex: 1,
  },
});

const mapStateToProps = (state: RootState) => ({
  booking: getBooking(state),
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector> & IBookingScreenProps<'Confirmation'>;

export default connector(ConfirmationScreen);
