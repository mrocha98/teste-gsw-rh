import { userConstants } from '../_constants/user.constants';
import LocalStorage from '../_services/local-storage';

const user = LocalStorage.getItem('user');

const initialState = {
  isLoading: false,
  isAuthenticated: !!user,
  user,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        isLoading: true,
        isAuthenticated: false,
        error: null,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        isLoading: false,
        isAuthenticated: true,
        user: action.user,
        error: null,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        isAuthenticated: false,
        isLoading: false,
        user: null,
        error: action.error,
      };
    case userConstants.LOGOUT:
      return {
        isAuthenticated: false,
        isLoading: false,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};
