import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { StateContextProvider} from './contexts/StateContextProvider';
ReactDOM.render(
<StateContextProvider>
<Router><App/></Router>
</StateContextProvider>,
 document.getElementById('root'));
