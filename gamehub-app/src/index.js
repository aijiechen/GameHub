import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';
/*import {browserHistory } from 'react-router';*/
import './index.css';
import {BrowserRouter } from 'react-router-dom'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createHashHistory} from 'history';

const browserHistory = createHashHistory();

ReactDOM.render((

	<BrowserRouter>
	<div>
		<App /> 
	</div> 
	</BrowserRouter>),
  document.getElementById('root')
  );
