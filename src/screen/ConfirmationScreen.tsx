import _ from 'lodash';
import moment from 'moment';
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { connect, ConnectedProps } from 'react-redux';
import AppTitle from '../components/AppTitle';
import DefaultContainer from '../components/DefaultContainer';
import InnerContainer from '../components/InnerContainer';
import { RootState } from '../store';
import { getBooking } from '../store/selectors/booking';
import { CALC_TABLE, COLOR_PALETTE, HARBOUR, PEOPLE, SERVICES } from '../utils/constant';
import { IBookingScreenProps } from '../utils/interface';
import { safeAreaViewStyle } from '../utils/styles';

const ConfirmationScreen: React.FC<Props> = ({ booking, navigation }) => {
  const getTotal = (): number =>
    _.isNumber(booking.total)
      ? booking.total
      : _.isString(booking.total)
      ? _.toNumber(_.first(booking.total.split(' ')))
      : 0;

  const getTotalPrice = (): number => {
    const total = getTotal();
    const service = SERVICES[booking.service || 'REGULER'];
    const personType = _.findKey(
      PEOPLE,
      (person) => person === booking.person
    ) as keyof typeof service.prices;

    const price: number = service.prices[personType];
    const { bookingFee, multiplier } = CALC_TABLE[booking.service || 'REGULER'][personType];

    return (bookingFee + price) * multiplier * total;
  };

  return (
    <SafeAreaView style={safeAreaViewStyle.default}>
      <DefaultContainer>
        <InnerContainer>
          <AppTitle />
          <View style={styles.mainContainer}>
            <Text style={styles.subTitle}>Kuota Tersedia (99999)</Text>
            <Text style={styles.subTitle}>Rincian Tiket</Text>
            <View style={styles.detailContainer}>
              <View style={{ flexDirection: 'row', marginVertical: 10, flex: 1 }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.subTitle}>Pelabuhan Awal</Text>
                  <Text style={styles.information}>
                    {HARBOUR[booking.departure || 'PELABUHAN_BARU'].name}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.subTitle}>Pelabuhan Akhir</Text>
                  <Text style={styles.information}>
                    {HARBOUR[booking.arrival || 'PELABUHAN_BARU'].name}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginVertical: 10,
                  flex: 1,
                }}
              >
                <Text style={styles.subTitle}>Jadwal Masuk</Text>
                <Text style={styles.information}>
                  {moment(booking.date).format('dddd, DD MMMM YYYY')}
                </Text>
                <Text style={styles.information}>{moment(booking.date).format('HH:mm A')}</Text>
              </View>
              <View
                style={{
                  marginVertical: 10,
                  paddingBottom: 10,
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  flex: 1,
                }}
              >
                <Text style={styles.subTitle}>Layanan</Text>
                <Text style={styles.information}>
                  {SERVICES[booking.service || 'REGULER'].name}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <Text style={[styles.information, { flex: 1 }]}>
                  {booking.person} x {getTotal()}
                </Text>
                <Text style={[styles.information, { flex: 1, textAlign: 'right' }]}>
                  {getTotalPrice()}
                </Text>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <Button title={'Kembali'} {...buttonStyles} onPress={navigation.goBack} />
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
  information: {
    color: 'rgba(0,0,0,0.45)',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 10,
    width: '100%',
  },
  detailContainer: {
    flex: 1,
    marginVertical: 20,
    borderRadius: 20,
    padding: 20,
    backgroundColor: COLOR_PALETTE.DEEP_BLUE['100'],
  },
});

const buttonStyles = StyleSheet.create({
  buttonStyle: {
    width: '90%',
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
