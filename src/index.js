import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TaxCalculator from './Component/TaxCalculator';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TaxCalculator />, document.getElementById('root'));
registerServiceWorker();
