import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import Form from './jsx/Form';
import * as serviceWorker from './jsx/serviceWorker';

ReactDOM.render(<Form />, document.getElementById('root'));
serviceWorker.unregister();
