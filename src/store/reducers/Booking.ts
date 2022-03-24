import { HARBOUR, SERVICES } from '../../utils/constant';
import { IAction } from '../../utils/interface';
import { IBaseBooking, IBooking } from '../../utils/reducerInterface';

const initialState: IBaseBooking = {
  date: '',
  arrival: HARBOUR.ARRIVAL.id,
  departure: HARBOUR.DEPART.id,
  person: 'ADULT',
  service: SERVICES.SERVICES.id,
  total: '1 Orang',
};

const booking = (state = initialState, action: IAction<IBooking>) => {
  switch (action.type) {
    case 'booking.set':
      return {
        ...state,
        ...action.data,
      };
    case 'booking.delete':
      return initialState;
    default:
      return state;
  }
};

export default booking;
