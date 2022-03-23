import _ from 'lodash';
import { AppDispatch } from '..';
import { IBaseBooking, IBooking, IBookings } from '../../utils/reducerInterface';

const addResource = (resource: any, bookings: IBookings) => ({
  type: 'bookings.update',
  payload: {
    id: _.size(bookings) + 1,
    data: {
      ...resource,
      id: _.size(bookings) + 1,
      createdAt: new Date().toISOString(),
    },
  },
});

const updateResource = (id: number, resource: any) => ({
  type: 'bookings.update',
  payload: {
    id,
    data: resource,
  },
});

const deleteResource = (id: number) => ({
  type: 'bookings.delete',
  payload: id,
});

export const addBooking = (booking: IBaseBooking, bookings: IBookings) => (dispatch: AppDispatch) =>
  dispatch(addResource(booking, bookings));

export const updateBooking = (id: number, booking: IBooking) => (dispatch: AppDispatch) =>
  dispatch(updateResource(id, booking));

export const deleteBooking = (id: number) => (dispatch: AppDispatch) =>
  dispatch(deleteResource(id));
