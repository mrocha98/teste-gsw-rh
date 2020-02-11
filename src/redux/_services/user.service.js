// const handleResponse = response => {
//   return response.text().then(text => {
//     const data = text && JSON.parse(text);
//     if (!response.ok) {
//       if (response.status === 401) {
//         // auto logout if 401 response return from api
//         logout();
//         location.reload(true);
//       }

//       const error = (data && data.message) || response.statusText;
//       return Promise.reject(error);
//     }

//     return data;
//   });
// };

import LocalStorage from './local-storage';

export default class UserService {
  static delay = 2 * 1000;
  static fakeUser = {
    nome: 'Admin GSW',
    email: 'admin@gsw.com.br',
  };

  static login(username, password) {
    return new Promise((resolve, reject) => {
      if (username === 'admin@gsw.com.br' && password === 'admin') {
        setTimeout(() => {
          LocalStorage.setItem('user', UserService.fakeUser);
          resolve(UserService.fakeUser);
        }, UserService.delay);
      } else {
        setTimeout(
          () => reject(new Error('Usuário ou senha inválido.')),
          UserService.delay,
        );
      }
    });
  }

  static logout() {
    LocalStorage.removeItem('user');
    window.location.reload(true);
    return new Promise.resolve();
  }
}
