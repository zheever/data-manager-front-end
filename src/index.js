import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app/index';
import { Provider } from 'mobx-react';
import models from './models';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider {...models}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
