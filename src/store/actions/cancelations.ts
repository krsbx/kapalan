import _ from 'lodash';
import { AppDispatch } from '..';
import { IBaseBooking, ICancelation, ICancelations } from '../../utils/reducerInterface';

const addResource = (resource: any, cancelations: ICancelations) => ({
  type: 'cancelations.update',
  payload: {
    id: _.size(cancelations) + 1,
    data: {
      ...resource,
      id: _.size(cancelations) + 1,
      canceledAt: new Date().toISOString(),
    },
  },
});

const updateResource = (id: number, resource: any) => ({
  type: 'cancelations.update',
  payload: {
    id,
    data: resource,
  },
});

const deleteResource = (id: number) => ({
  type: 'cancelations.delete',
  payload: id,
});

export const addCancelation =
  (booking: IBaseBooking, cancelations: ICancelations) => (dispatch: AppDispatch) =>
    dispatch(addResource(booking, cancelations));

export const updateCancelation = (id: number, booking: ICancelation) => (dispatch: AppDispatch) =>
  dispatch(updateResource(id, booking));

export const deleteCancelation = (id: number) => (dispatch: AppDispatch) =>
  dispatch(deleteResource(id));
