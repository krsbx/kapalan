import _ from 'lodash';
import { GENDER, HARBOUR, SERVICES } from './constant';
import { IBaseBooking } from './reducerInterface';

export const bookingValidationSchema = (booking: IBaseBooking) => {
  const errors: Record<string, string> = {};

  if (_.includes([HARBOUR.ARRIVAL.id, HARBOUR.DEPART.id], booking.departure))
    errors.departure = 'Keberangkatan Dibutuhkan';

  if (_.includes([HARBOUR.ARRIVAL.id, HARBOUR.DEPART.id], booking.arrival))
    errors.arrival = 'Tujuan Dibutuhkan';

  if (booking.service === SERVICES.SERVICES.id) errors.service = 'Layanan Dibutuhkan';

  if (_.isString(booking.date) && _.isEmpty(booking.date.trim()))
    errors.date = 'Tanggal dan Waktu Masuk Dibutuhkan';

  if (_.isString(booking.total) && !_.isNumber(_.toNumber(_.first(booking.total.split(' ')))))
    errors.total = 'Total Dibutuhkan';

  return errors;
};

export const paymentBookingSchema = (booking: IBaseBooking['orderPerson']) => {
  const errors: Record<string, string> = {};

  if (_.isEmpty(booking?.fullName)) errors.fullName = 'Nama Lengkap Dibutuhkan';

  if (_.isEmpty(_.find(GENDER, (v, k) => k === booking?.gender)))
    errors.gender = 'Jenis Kelamin Dibutuhkan';

  if (_.isNil(booking?.age)) errors.age = 'Umur Dibutuhkan';

  return errors;
};
