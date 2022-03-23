import { RootState } from '..';

export const getBookings = (state: RootState) => state.bookings;

export const getBookingById = (state: RootState) => (id: number) => state.bookings[id];
