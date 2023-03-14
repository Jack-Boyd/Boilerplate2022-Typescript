import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import moment from 'moment-timezone';

import { store } from './store/store';
import Counter from './modules/counter/counter';

import '~/styles/fonts/fredoka/bold/bold.css';
import '~/styles/fonts/fredoka/regular/regular.css';
import '~/styles/_index.scss';

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
      <Counter />
    </Provider>
  </StrictMode>,
);