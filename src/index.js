import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import cartLogic from './components/reducers/cartLogic';

const store = createStore(cartLogic);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
