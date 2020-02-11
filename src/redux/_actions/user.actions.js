import { userConstants } from '../_constants/user.constants';
import UserService from '../_services/user.service';

const request = user => ({ type: userConstants.LOGIN_REQUEST, user });
const success = user => ({
  type: userConstants.LOGIN_SUCCESS,
  user
});
const failure = error => ({
  type: userConstants.LOGIN_FAILURE,
  error
});

export const login = (username, password) => {
  return dispatch => {
    dispatch(request({ username }));

    UserService.login(username, password).then(
      user => dispatch(success(user)),
      error => dispatch(failure({ mensagem: error.toString() })),
    );
  };
};

export const logout = () => {
  UserService.logout();
  return { type: userConstants.LOGOUT };
};
