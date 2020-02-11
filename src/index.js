import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { store } from './redux/_herlpers/store';
import LoadIcons from './components/FontAwesomeLibrary/FontAwesomeLibrary';
import App from './App';

const basename = process.env.PUBLIC_URL || '';
LoadIcons();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
