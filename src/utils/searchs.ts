import _ from 'lodash';
import moment from 'moment';
import { IBookings, ICancelations } from './reducerInterface';

export const searchBookings = (bookings: IBookings | ICancelations, text: string) => {
  const filterByDeparture = _.filter(bookings, (booking) =>
    booking.departure.toLowerCase().includes(text.toLowerCase())
  );

  const filterByArrival = _.filter(bookings, (booking) =>
    booking.arrival.toLowerCase().includes(text.toLowerCase())
  );

  const filterByDate = _.filter(bookings, (booking) =>
    _.isString(booking.date)
      ? booking.date.includes(text.toLowerCase())
      : moment(booking.date).toString().includes(text.toLowerCase())
  );

  const filterByName = _.filter(bookings, (booking) =>
    _.isNil(booking.orderPerson)
      ? false
      : booking.orderPerson.fullName.toLowerCase().includes(text.toLowerCase())
  );

  return _.merge(filterByDeparture, filterByArrival, filterByDate, filterByName);
};
