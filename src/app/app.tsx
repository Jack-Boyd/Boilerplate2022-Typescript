import React from 'react';
import Counter from '../modules/counter/counter';

import './app.scss';

import '~/styles/fonts/fredoka/bold/bold.css';
import '~/styles/fonts/fredoka/regular/regular.css';
import '~/styles/_index.scss';

const AppComponent = () => {
  return (
    <div className="app-root">
      <Counter />
    </div>
  )
};

export default AppComponent;