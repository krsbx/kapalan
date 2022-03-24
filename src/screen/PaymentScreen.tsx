import React, { useState } from 'react';
import _ from 'lodash';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { connect, ConnectedProps } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import AppTitle from '../components/AppTitle';
import DefaultContainer from '../components/DefaultContainer';
import DetailContainer from '../components/DetailContainer';
import InnerContainer from '../components/InnerContainer';
import { RootState } from '../store';
import {
  deleteBooking as _resetBooking,
  updateBooking as _updateBooking,
} from '../store/actions/booking';
import { getBooking } from '../store/selectors/booking';
import { IBookingScreenProps } from '../utils/interface';
import { safeAreaViewStyle } from '../utils/styles';
import { COLOR_PALETTE, GENDER } from '../utils/constant';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { getBookings } from '../store/selectors/bookings';
import { addBooking as _addBooking } from '../store/actions/bookings';
import PaymentModal from '../components/modals/PaymentModal';
import { paymentBookingSchema } from '../utils/formSchema';

const PaymentScreen: React.FC<Props> = ({
  navigation,
  booking,
  bookings,
  updateBooking,
  resetBooking,
  addBooking,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<Record<string, string>>({});

  const onTextChange = (value: string, name: string) => {
    const resource = _.set(booking, `${name}`, value);

    updateBooking(resource);
  };

  const onConfirm = () => {
    resetBooking();

    navigation.replace('Booking', {});
  };

  const validate = () => {
    const newError = paymentBookingSchema(booking.orderPerson);
    setError({});

    if (!_.isEmpty(newError)) setError(newError);
  };

  const onSubmit = () => {
    const newError = paymentBookingSchema(booking.orderPerson);

    validate();

    if (!_.isEmpty(newError)) return;

    addBooking(booking, bookings);

    setIsOpen(true);
  };

  const renderOtherGender = () => {
    const isNotExist = _.isEmpty(booking?.orderPerson?.gender);

    const isNotFound = _.isEmpty(_.find(GENDER, (v, k) => k === booking.orderPerson?.gender));

    return (
      (isNotExist || isNotFound) && (
        <Picker.Item
          value={'Jenis Kelamin'}
          label={'Jenis Kelamin'}
          style={{
            color: 'rgba(0,0,0,0.5)',
          }}
        />
      )
    );
  };

  return (
    <SafeAreaView style={safeAreaViewStyle.default}>
      <DefaultContainer>
        <InnerContainer>
          <AppTitle />
          <ScrollView style={{ flex: 1, width: '100%' }}>
            <KeyboardAvoidingView behavior="padding" style={styles.mainContainer}>
              <DetailContainer booking={booking} />
              <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <Text style={{ color: 'black', fontWeight: '700', fontSize: 18 }}>
                  Data Pemesan
                </Text>
                <Input
                  autoCompleteType={'off'}
                  placeholder="Nama Lengkap"
                  onChangeText={(value) => onTextChange(value, 'orderPerson.fullName')}
                  value={_.get(booking, 'orderPerson.fullName', '')}
                  containerStyle={{
                    height: 50,
                  }}
                  onFocus={() => {
                    setTouched({ ...touched, fullName: false });
                  }}
                  onBlur={() => {
                    setTouched({ ...touched, fullName: true });
                    validate();
                  }}
                />
                {error.fullName && touched.fullName && (
                  <Text style={styles.error}>{error.fullName}</Text>
                )}
                <View style={styles.inputContainer}>
                  <Picker
                    selectedValue={booking.orderPerson?.gender}
                    onValueChange={(value) => onTextChange(value, 'orderPerson.gender')}
                    style={{
                      marginHorizontal: -10,
                    }}
                    onFocus={() => {
                      setTouched({ ...touched, gender: false });
                    }}
                    onBlur={() => {
                      setTouched({ ...touched, gender: true });
                      validate();
                    }}
                  >
                    {renderOtherGender()}
                    {_.map(GENDER, (value, id) => (
                      <Picker.Item value={id} label={value} key={id} />
                    ))}
                  </Picker>
                </View>
                {error.gender && touched.gender && <Text style={styles.error}>{error.gender}</Text>}
                <Input
                  autoCompleteType={'off'}
                  placeholder="Umur"
                  onChangeText={(value) => onTextChange(value, 'orderPerson.age')}
                  value={_.get(booking, 'orderPerson.age', '')}
                  keyboardType={'numeric'}
                  containerStyle={{
                    height: 50,
                  }}
                  onFocus={() => {
                    setTouched({ ...touched, age: false });
                  }}
                  onBlur={() => {
                    setTouched({ ...touched, age: true });
                    validate();
                  }}
                />
                {error.age && touched.age && <Text style={styles.error}>{error.age}</Text>}
                <View
                  style={{
                    paddingTop: 20,
                  }}
                >
                  <Button
                    icon={<FontAwesome5 name="ship" size={22} color={'white'} />}
                    buttonStyle={{
                      width: '100%',
                      backgroundColor: COLOR_PALETTE.DEEP_BLUE['200'],
                    }}
                    titleStyle={{
                      marginHorizontal: 5,
                    }}
                    title={'Pesan Tiket'}
                    onPress={onSubmit}
                  />
                </View>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </InnerContainer>
      </DefaultContainer>
      <PaymentModal isOpen={isOpen} onClose={onConfirm} />
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
  error: {
    color: 'red',
    fontWeight: '700',
    marginHorizontal: 10,
    marginTop: 10,
  },
});

const mapStateToProps = (state: RootState) => ({
  booking: getBooking(state),
  bookings: getBookings(state),
});

const connector = connect(mapStateToProps, {
  updateBooking: _updateBooking,
  addBooking: _addBooking,
  resetBooking: _resetBooking,
});

type Props = ConnectedProps<typeof connector> & IBookingScreenProps<'Payment'>;

export default connector(PaymentScreen);
