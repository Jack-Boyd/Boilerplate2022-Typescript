import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import moment from 'moment-timezone';

import AppComponent from './app';
import { store } from '../store/store';

moment.tz.setDefault('Pacific/Auckland');

moment.updateLocale('en-nz', {
  week: {
    dow: 0
  }
});

moment.locale('en-nz');

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <AppComponent />
    </Provider>
  </StrictMode>,
);