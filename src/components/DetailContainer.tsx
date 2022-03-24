import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { CALC_TABLE, COLOR_PALETTE, HARBOUR, PEOPLE, SERVICES } from '../utils/constant';
import { IBaseBooking } from '../utils/reducerInterface';

const DetailContainer: React.FC<Props> = ({ booking, onPress }) => {
  const getTotal = (): number =>
    _.isNumber(booking.total)
      ? booking.total
      : _.isString(booking.total)
      ? _.toNumber(_.first(booking.total.split(' ')))
      : 0;

  const getTotalPrice = (): number => {
    const total = getTotal();
    const service = SERVICES[booking.service];
    const personType = _.findKey(
      PEOPLE,
      (person) => person === booking.person
    ) as keyof typeof service.prices;

    const price: number = service.prices[personType];
    const { bookingFee, multiplier } = CALC_TABLE[booking.service][personType];

    return (bookingFee + price) * multiplier * total;
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={onPress ? 0.2 : 1} style={{ flex: 1 }}>
      <View style={styles.detailContainer}>
        <View style={[styles.destContainer, styles.flexRow]}>
          <View style={styles.destContainer}>
            <Text style={styles.subTitle}>Pelabuhan Awal</Text>
            <Text style={styles.information}>{HARBOUR[booking.departure].name}</Text>
          </View>
          <View style={styles.destContainer}>
            <Text style={styles.subTitle}>Pelabuhan Akhir</Text>
            <Text style={styles.information}>{HARBOUR[booking.arrival].name}</Text>
          </View>
        </View>
        <View
          style={{
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
            paddingBottom: 10,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        >
          <Text style={styles.subTitle}>Layanan</Text>
          <Text style={styles.information}>{SERVICES[booking.service || 'REGULER'].name}</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
          <Text style={[styles.information, { flex: 1 }]}>
            {booking.person} x {getTotal()}
          </Text>
          <Text style={[styles.information, { flex: 1, textAlign: 'right' }]}>
            {getTotalPrice()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  detailContainer: {
    flex: 1,
    marginVertical: 20,
    borderRadius: 20,
    padding: 20,
    backgroundColor: COLOR_PALETTE.DEEP_BLUE['100'],
  },
  destContainer: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
});

type Props = {
  booking: IBaseBooking;
  onPress?: () => void;
};

export default DetailContainer;
