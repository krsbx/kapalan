import _ from 'lodash';
import React, { useState } from 'react';
import { TouchableOpacity, SafeAreaView, View, StyleSheet, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import DatePicker from 'react-native-date-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialComIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-picker/picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { connect, ConnectedProps } from 'react-redux';
import { COLOR_PALETTE, HARBOUR, PEOPLE, PLACEHOLDER, SERVICES } from '../utils/constant';
import { IBookingScreenProps } from '../utils/interface';
import moment from 'moment';
import DefaultContainer from '../components/DefaultContainer';
import { safeAreaViewStyle } from '../utils/styles';
import { RootState } from '../store';
import { getBooking } from '../store/selectors/booking';
import { updateBooking as _updateBooking } from '../store/actions/booking';
import AppTitle from '../components/AppTitle';
import InnerContainer from '../components/InnerContainer';
import { bookingValidationSchema } from '../utils/formSchema';

const HomeScreen: React.FC<Props> = ({ navigation, booking, updateBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<Record<string, string>>({});

  const validate = () => {
    const newError = bookingValidationSchema(booking);
    setError({});

    if (!_.isEmpty(newError)) setError(newError);
  };

  const onSubmit = () => {
    const newError = bookingValidationSchema(booking);

    validate();

    if (!_.isEmpty(newError)) return;

    navigation.push('Confirmation', {});
  };

  const closeValidate = () => {
    setIsOpen(false);
    validate();
  };

  return (
    <SafeAreaView style={safeAreaViewStyle.default}>
      <DefaultContainer>
        <InnerContainer>
          <AppTitle />
          <ScrollView>
            <View
              style={{
                marginVertical: 10,
              }}
            >
              <Text>Pelabuhan Awal</Text>
              <View style={styles.pickerContainer}>
                <MaterialComIcons name="sail-boat" size={35} />
                <Picker
                  selectedValue={booking.departure}
                  onValueChange={(value) =>
                    updateBooking({
                      departure: value,
                    })
                  }
                  onFocus={() => {
                    setTouched({ ...touched, departure: false });
                  }}
                  onBlur={() => {
                    setTouched({ ...touched, departure: true });
                    validate();
                  }}
                  style={{ width: '90%' }}
                >
                  {booking.departure === HARBOUR.DEPART.id && (
                    <Picker.Item label={HARBOUR.DEPART.name} value={HARBOUR.DEPART.id} />
                  )}
                  {_.map(_.omit(HARBOUR, ['DEPART', 'ARRIVAL']), ({ id, name }) => (
                    <Picker.Item label={name} value={id} key={id} />
                  ))}
                </Picker>
              </View>
              {error.departure && touched.departure && (
                <Text style={styles.error}>{error.departure}</Text>
              )}
            </View>
            <View
              style={{
                marginVertical: 10,
              }}
            >
              <Text>Pelabuhan Tujuan</Text>
              <View style={styles.pickerContainer}>
                <MaterialComIcons name="sail-boat" size={35} />
                <Picker
                  selectedValue={booking.arrival}
                  onValueChange={(value) =>
                    updateBooking({
                      arrival: value,
                    })
                  }
                  onFocus={() => {
                    setTouched({ ...touched, arrival: false });
                  }}
                  onBlur={() => {
                    setTouched({ ...touched, arrival: true });
                    validate();
                  }}
                  style={{ width: '90%' }}
                >
                  {booking.arrival === HARBOUR.ARRIVAL.id && (
                    <Picker.Item label={HARBOUR.ARRIVAL.name} value={HARBOUR.ARRIVAL.id} />
                  )}
                  {_.map(_.omit(HARBOUR, ['DEPART', 'ARRIVAL']), ({ id, name }) => (
                    <Picker.Item label={name} value={id} key={id} />
                  ))}
                </Picker>
              </View>
              {error.arrival && touched.arrival && (
                <Text style={styles.error}>{error.arrival}</Text>
              )}
            </View>
            <View
              style={{
                marginVertical: 10,
              }}
            >
              <Text>Kelas Layanan</Text>
              <View style={styles.pickerContainer}>
                <MaterialComIcons name="seat-passenger" size={35} />
                <Picker
                  selectedValue={booking.service}
                  onValueChange={(value) =>
                    updateBooking({
                      service: value,
                    })
                  }
                  onFocus={() => {
                    setTouched({ ...touched, service: false });
                  }}
                  onBlur={() => {
                    setTouched({ ...touched, service: true });
                    validate();
                  }}
                  style={{ width: '90%' }}
                >
                  {booking.service === SERVICES.SERVICES.id && (
                    <Picker.Item label={SERVICES.SERVICES.name} value={SERVICES.SERVICES.id} />
                  )}
                  {_.map(_.omit(SERVICES, ['SERVICES']), ({ id, name }) => (
                    <Picker.Item label={name} value={id} key={id} />
                  ))}
                </Picker>
              </View>
              {error.service && touched.service && (
                <Text style={styles.error}>{error.service}</Text>
              )}
            </View>
            <View
              style={{
                marginVertical: 10,
              }}
            >
              <Text>Tanggal Masuk Pelabuhan</Text>
              <View style={styles.pickerContainer}>
                <MaterialIcons name="date-range" size={35} />
                <TouchableOpacity
                  style={{
                    alignItems: 'flex-start',
                    width: '90%',
                    height: 25,
                    justifyContent: 'center',
                    paddingHorizontal: 20,
                  }}
                  onFocus={() => {
                    setTouched({ ...touched, date: false });
                  }}
                  onBlur={() => {
                    setTouched({ ...touched, date: true });
                    validate();
                  }}
                  onPress={() => setIsOpen(true)}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'rgba(0,0,0, 0.85)',
                    }}
                  >
                    {!_.isDate(booking.date)
                      ? PLACEHOLDER.DATE
                      : moment(booking.date).format('DD/MM/YYYY')}
                  </Text>
                </TouchableOpacity>
              </View>
              {error.date && touched.date && <Text style={styles.error}>{error.date}</Text>}
            </View>
            <View
              style={{
                marginVertical: 10,
              }}
            >
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={booking.person}
                  onValueChange={(value) =>
                    updateBooking({
                      person: value,
                    })
                  }
                  style={{ flex: 1 }}
                >
                  {_.map(PEOPLE, (type, id) => (
                    <Picker.Item label={type} value={id} key={id} />
                  ))}
                </Picker>
                <Picker
                  selectedValue={booking.total}
                  onValueChange={(value) =>
                    updateBooking({
                      total: value,
                    })
                  }
                  style={{ flex: 1 }}
                >
                  {_.map(Array(4), (value, id) => (
                    <Picker.Item label={`${id + 1} Orang`} value={`${id + 1} Orang`} key={id} />
                  ))}
                </Picker>
              </View>
              {error.total && <Text style={styles.error}>{error.total}</Text>}
            </View>
            <View>
              <Button
                icon={<FontAwesome5 name="ship" size={22} color={'white'} />}
                title="Buat Tiket"
                buttonStyle={{
                  backgroundColor: COLOR_PALETTE.DEEP_BLUE['200'],
                }}
                titleStyle={{
                  marginHorizontal: 5,
                }}
                onPress={onSubmit}
              />
            </View>
          </ScrollView>
        </InnerContainer>
      </DefaultContainer>
      <DatePicker
        modal
        open={isOpen}
        onConfirm={(newDate) => {
          updateBooking({
            date: newDate,
          });
          closeValidate();
        }}
        onCancel={() => {
          setTouched({ ...touched, date: true });
          closeValidate();
        }}
        date={_.isEmpty(booking.date) ? new Date() : moment(booking.date).toDate()}
        onDateChange={(newDate) =>
          updateBooking({
            date: newDate,
          })
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    fontWeight: '700',
  },
});

const mapStateToProps = (state: RootState) => ({
  booking: getBooking(state),
});

const connector = connect(mapStateToProps, {
  updateBooking: _updateBooking,
});

type Props = ConnectedProps<typeof connector> & IBookingScreenProps<'Booking'>;

export default connector(HomeScreen);
