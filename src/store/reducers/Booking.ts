import { PEOPLE } from '../../utils/constant';
import { IAction } from '../../utils/interface';
import { IBaseBooking, IBooking } from '../../utils/reducerInterface';

const initialState: IBaseBooking = {
  date: '',
  person: PEOPLE.ADULT,
  total: 0,
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
