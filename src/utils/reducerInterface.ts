import { GenderType, HarborType, PeopleType, ServiceType } from './interface';

export interface IBaseBooking {
  departure: HarborType;
  arrival: HarborType;
  service: ServiceType;
  person: PeopleType;
  total: number | string;
  date: string | Date;
  orderPerson?: {
    fullName: string;
    gender: GenderType;
    age: number;
  };
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
