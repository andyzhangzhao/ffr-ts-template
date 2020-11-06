import { USER_DATA, SINGLE_USER_DATA } from './userActions';

const initialState = {
  userData: [],
  singleUserData: {
    key: '',
    name: '',
    age: 0,
    address: '',
    tags: []
  }
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_DATA: {
      return {
        ...state,
        userData: action.userData
      };
    }
    case SINGLE_USER_DATA: {
      return {
        ...state,
        singleUserData: action.singleUserData
      };
    }
    default:
      return state;
  }
}
