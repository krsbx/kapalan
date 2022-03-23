import _ from 'lodash';
import { ICancelation, ICancelations } from '../../utils/reducerInterface';
import { IAction } from '../../utils/reducerInterface';

const initialState: ICancelations = {};

const cancelations = (state = initialState, action: IAction<ICancelation, ICancelations>) => {
  switch (action.type) {
    case 'cancelations.set':
      if (_.isNumber(action.payload)) return state;

      const data = _.isArray(action.payload) ? action.payload : [action.payload];

      return {
        ...state,
        ..._.keyBy(data, 'id'),
      };
    case 'cancelations.update':
      if (_.isNumber(action.payload) || _.isArray(action.payload)) return state;

      return {
        ...state,
        [action.payload.id]: action.payload.data,
      };
    case 'cancelations.delete': {
      if (!_.isNumber(action.payload)) return state;

      const temp = _.cloneDeep(state);
      delete temp[action.payload];

      return temp;
    }
    default:
      return state;
  }
};

export default cancelations;
