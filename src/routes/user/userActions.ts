import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../common/store';

// Action type definitions
export const USER_DATA = 'USER_DATA';
export const SINGLE_USER_DATA = 'SINGLE_USER_DATA';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  },
  {
    key: '4',
    name: 'Hash Brown',
    age: 34,
    address: 'Sidney No. 4 Lake Park',
    tags: ['otaku']
  },
  {
    key: '5',
    name: 'Jill McDonalds',
    age: 35,
    address: 'Sidney No. 5 Lake Park',
    tags: ['average', 'student']
  },
  {
    key: '6',
    name: 'James White',
    age: 36,
    address: 'Sidney No. 6 Lake Park',
    tags: ['average', 'student']
  },
  {
    key: '7',
    name: 'Jules BlackSmith',
    age: 37,
    address: 'Sidney No. 7 Lake Park',
    tags: ['average', 'student']
  },
  {
    key: '8',
    name: 'July Forth',
    age: 38,
    address: 'Sidney No. 8 Lake Park',
    tags: ['average', 'student']
  },
  {
    key: '9',
    name: 'Joanna McBride',
    age: 39,
    address: 'Sidney No. 9 Lake Park',
    tags: ['average', 'student']
  },
  {
    key: '0',
    name: 'Josh Harrington',
    age: 39,
    address: 'Sidney No. 9 Lake Park',
    tags: ['average', 'student']
  }
];

export const getUserData = (): ThunkAction<void, RootState, unknown, Action<string>> => {
  return dispatch => {
    return Promise.resolve(data).then(d => {
      dispatch({
        type: USER_DATA,
        userData: d
      });
    });
  };
};

export const getSingleUserData = (key: string): ThunkAction<void, RootState, unknown, Action<string>> => {
  return dispatch => {
    return Promise.resolve(data.find(u => u.key === key)).then(d => {
      dispatch({
        type: SINGLE_USER_DATA,
        singleUserData: d
      });
    });
  };
};
