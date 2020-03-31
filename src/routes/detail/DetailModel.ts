import { IFModel } from '@sf/ffr-core/es';
import { Reducer } from 'redux';

interface IUpdateDetail {
  text: Array<string>;
}

/**
 * must specify generic type of reducer
 */
const updateDetail: Reducer<IUpdateDetail> = (state, action) => {
  return { ...state, text: action.payload };
};

export const DetailModel: IFModel = {
  namespace: 'detail',
  initialState: {
    text: []
  },
  reducers: {
    updateDetail
  },
  effects: {
    getDetail: async (payload, dispatch) => {
      setTimeout(() => {
        dispatch({
          type: 'detail/updateDetail',
          payload: ['1. learn React', '2. learn Typescript', '3. learn ffr-core']
        });
      }, 100);
      return [];
    }
  }
};
export type TDetailModel = { detail: IUpdateDetail };
