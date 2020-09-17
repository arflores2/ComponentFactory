import './why-did-you-render';

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { LoanDetails } from './components/LoanDetails';

ReactDOM.render(
  <div className="App">
    <LoanDetails />
  </div>,
  document.getElementById('root')
);
