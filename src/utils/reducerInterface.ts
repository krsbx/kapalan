import { HarborType, PeopleType, PlaceholderType, ServiceType } from './interface';

export interface IBaseBooking {
  departure: HarborType | PlaceholderType;
  arrival: HarborType | PlaceholderType;
  service: ServiceType | PlaceholderType;
  people: PeopleType;
  total: number | string;
  date: string;
}

export interface IBooking extends IBaseBooking {
  id: number;
  createdAt: string;
}

export interface ICancelation extends IBooking {
  canceledAt: string;
}

export interface IBookings {
  [id: number]: IBooking;
}

export interface ICancelations {
  [id: number]: ICancelation;
}

interface IPayload<K> {
  id: number;
  data: K;
}

type IPayloads<K> = K[];

export interface IAction<T, K> {
  type: string;
  payload: IPayload<T> | IPayloads<K> | number;
}
