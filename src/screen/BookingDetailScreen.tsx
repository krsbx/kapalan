import _ from 'lodash';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { connect, ConnectedProps } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AppTitle from '../components/AppTitle';
import DefaultContainer from '../components/DefaultContainer';
import DetailContainer from '../components/DetailContainer';
import InnerContainer from '../components/InnerContainer';
import { RootState } from '../store';
import { addCancelation as _addCancelation } from '../store/actions/cancelations';
import { deleteBooking as _deleteBooking } from '../store/actions/bookings';
import { getBookingById as _getBookingById } from '../store/selectors/bookings';
import { COLOR_PALETTE, GENDER } from '../utils/constant';
import { GenderType, IBookingsStackProps } from '../utils/interface';
import { safeAreaViewStyle } from '../utils/styles';
import { getCancelations } from '../store/selectors/cancelations';

const BookingDetailScreen: React.FC<Props> = ({
  getBookingById,
  deleteBooking,
  addCancelation,
  route,
  navigation,
  cancelations,
}) => {
  const booking = getBookingById(route.params.bookingId);

  const getGender = (): GenderType => _.get(booking, 'orderPerson.gender', 'PRIA');

  const onDelete = () => {
    addCancelation(booking, cancelations);
    deleteBooking(route.params.bookingId);

    navigation.goBack();
  };

  return (
    <SafeAreaView style={safeAreaViewStyle.default}>
      <DefaultContainer>
        <InnerContainer>
          <AppTitle />
          <KeyboardAvoidingView behavior="padding" style={styles.mainContainer}>
            <DetailContainer booking={booking} />
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
              <Text style={{ color: 'black', fontWeight: '700', fontSize: 18 }}>Data Pemesan</Text>
              <Input
                autoCompleteType={'off'}
                placeholder="Nama Lengkap"
                value={_.get(booking, 'orderPerson.fullName', '')}
                containerStyle={{
                  height: 50,
                }}
                disabled
              />
              <Input
                autoCompleteType={'off'}
                placeholder="Nama Lengkap"
                value={GENDER[getGender()]}
                containerStyle={{
                  height: 50,
                }}
                disabled
              />
              <Input
                autoCompleteType={'off'}
                placeholder="Umur"
                value={_.get(booking, 'orderPerson.age', '')}
                keyboardType={'numeric'}
                containerStyle={{
                  height: 50,
                }}
                disabled
              />
              <View style={{ flexDirection: 'row', paddingTop: 20 }}>
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
                  title={'Batalkan'}
                  {..._.omit(buttonStyles, ['buttonStyle'])}
                  buttonStyle={{
                    width: '90%',
                    backgroundColor: COLOR_PALETTE.DEEP_BLUE['100'],
                  }}
                  titleStyle={{
                    color: 'rgba(0,0,0,0.5)',
                  }}
                  icon={
                    <FontAwesome
                      name="close"
                      size={20}
                      style={{
                        marginRight: 10,
                        color: 'rgba(0,0,0,0.5)',
                      }}
                    />
                  }
                  onPress={onDelete}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </InnerContainer>
      </DefaultContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    marginVertical: 10,
  },
  inputContainer: {
    borderBottomWidth: 0.75,
    borderBottomColor: 'black',
    marginHorizontal: 10,
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
  titleStyle: {
    fontWeight: '700',
  },
});

const mapStateToProps = (state: RootState) => ({
  getBookingById: _getBookingById(state),
  cancelations: getCancelations(state),
});

const connector = connect(mapStateToProps, {
  deleteBooking: _deleteBooking,
  addCancelation: _addCancelation,
});

type Props = ConnectedProps<typeof connector> & IBookingsStackProps<'SelectedBooking'>;

export default connector(BookingDetailScreen);
