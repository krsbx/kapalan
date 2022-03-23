import { AppDispatch } from '..';
import { IBaseBooking } from '../../utils/reducerInterface';

const updateResource = (resource: any) => ({
  type: 'booking.set',
  data: resource,
});

const deleteResource = (): any => ({
  type: 'booking.delete',
});

export const updateBooking = (resource: Partial<IBaseBooking>) => (dispatch: AppDispatch) =>
  dispatch(updateResource(resource));

export const deleteBooking = () => (dispatch: AppDispatch) => dispatch(deleteResource());
