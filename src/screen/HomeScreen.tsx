import _ from 'lodash';
import React, { useState } from 'react';
import { TouchableOpacity, SafeAreaView, View, StyleSheet, Text } from 'react-native';
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

const HomeScreen: React.FC<Props> = ({ navigation, booking, updateBooking }) => {
  const [isOpen, setIsOpen] = useState(false);

  const pushToConfirmation = () => {
    if (!_.isNil(booking.departure) && _.isEmpty(HARBOUR[booking.departure])) return;

    if (!_.isNil(booking.arrival) && _.isEmpty(HARBOUR[booking.arrival])) return;

    if (!_.isNil(booking.service) && _.isEmpty(SERVICES[booking.service])) return;

    if (_.isString(booking.date) && _.isEmpty(booking.date.trim())) return;

    if (!_.isDate(booking.date)) return;

    if (_.isString(booking.total) && !_.isNumber(_.toNumber(_.first(booking.total.split(' ')))))
      return;

    navigation.push('Confirmation', {});
  };

  return (
    <SafeAreaView style={safeAreaViewStyle.default}>
      <DefaultContainer>
        <View style={styles.container}>
          <AppTitle />
          <View
            style={{
              marginVertical: 10,
            }}
          >
            <Text>Pelabuhan Awal</Text>
            <View style={styles.pickerContainer}>
              <MaterialComIcons name="sail-boat" size={35} />
              <Picker
                selectedValue={_.isNil(booking.departure) ? PLACEHOLDER.DEPART : booking.departure}
                onValueChange={(value) =>
                  updateBooking({
                    // @ts-ignore
                    departure: value,
                  })
                }
                style={{ width: '90%' }}
              >
                {_.isNil(booking.departure) && (
                  <Picker.Item label={PLACEHOLDER.DEPART} value={PLACEHOLDER.DEPART} />
                )}
                {_.map(HARBOUR, ({ id, name }) => (
                  <Picker.Item label={name} value={id} key={id} />
                ))}
              </Picker>
            </View>
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
                selectedValue={_.isNil(booking.arrival) ? PLACEHOLDER.ARRIVAL : booking.arrival}
                onValueChange={(value) =>
                  updateBooking({
                    // @ts-ignore
                    arrival: value,
                  })
                }
                style={{ width: '90%' }}
              >
                {_.isNil(booking.arrival) && (
                  <Picker.Item label={PLACEHOLDER.ARRIVAL} value={PLACEHOLDER.ARRIVAL} />
                )}
                {_.map(HARBOUR, ({ id, name }) => (
                  <Picker.Item label={name} value={id} key={id} />
                ))}
              </Picker>
            </View>
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
                selectedValue={_.isNil(booking.service) ? PLACEHOLDER.SERVICES : booking.service}
                onValueChange={(value) =>
                  updateBooking({
                    // @ts-ignore
                    service: value,
                  })
                }
                style={{ width: '90%' }}
              >
                {_.isNil(booking.service) && (
                  <Picker.Item label={PLACEHOLDER.SERVICES} value={PLACEHOLDER.SERVICES} />
                )}
                {_.map(SERVICES, ({ id, name }) => (
                  <Picker.Item label={name} value={id} key={id} />
                ))}
              </Picker>
            </View>
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
                  <Picker.Item label={type} value={type} key={id} />
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
          </View>
          <View>
            <Button
              icon={<FontAwesome5 name="ship" size={22} color={'white'} />}
              title="Buat Tiket"
              buttonStyle={{
                width: '100%',
                backgroundColor: COLOR_PALETTE.DEEP_BLUE['200'],
              }}
              titleStyle={{
                marginHorizontal: 5,
              }}
              onPress={pushToConfirmation}
            />
          </View>
        </View>
      </DefaultContainer>
      <DatePicker
        modal
        open={isOpen}
        onConfirm={(newDate) => {
          updateBooking({
            date: newDate,
          });
          setIsOpen(false);
        }}
        onCancel={() => setIsOpen(false)}
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
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    margin: '5%',
    padding: 20,
    borderRadius: 25,
  },
  pickerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 10,
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
