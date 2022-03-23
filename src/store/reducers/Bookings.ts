import _ from 'lodash';
import { IBooking, IBookings } from '../../utils/reducerInterface';
import { IAction } from '../../utils/reducerInterface';

const initialState: IBookings = {};

const bookings = (state = initialState, action: IAction<IBooking, IBookings>) => {
  switch (action.type) {
    case 'bookings.set':
      if (_.isNumber(action.payload)) return state;

      const data = _.isArray(action.payload) ? action.payload : [action.payload];

      return {
        ...state,
        ..._.keyBy(data, 'id'),
      };
    case 'bookings.update':
      if (_.isNumber(action.payload) || _.isArray(action.payload)) return state;

      return {
        ...state,
        [action.payload.id]: action.payload.data,
      };
    case 'bookings.delete': {
      if (!_.isNumber(action.payload)) return state;

      const temp = _.cloneDeep(state);
      delete temp[action.payload];

      return temp;
    }
    default:
      return state;
  }
};

export default bookings;
