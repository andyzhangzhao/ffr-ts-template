import { ISFModel, Reducer } from '@sf/ffr-core/es';

interface IUpdateText {
  payload: string;
}

interface IUpdateCount {
  count: number;
}

/**
 * must specify generic type of reducer
 */
const updateText: Reducer<IUpdateText> = (state, action) => {
  return { ...state, payload: action.payload };
};

const updateCount: Reducer<IUpdateCount> = (state, action) => {
  return { ...state, count: action.payload + 1 };
};

export const HomePageModel: ISFModel<'home', IUpdateText | IUpdateCount> = {
  namespace: 'home',
  initialState: {
    payload: 'Waiting ...',
    count: 0
  },
  reducers: {
    updateText,
    updateCount
  },
  effects: {
    getText: async (payload, dispatch) => {
      setTimeout(() => {
        dispatch({ type: 'home/updateText', payload: 'Hello World' });
      }, 100);
      return '';
    }
  }
};
