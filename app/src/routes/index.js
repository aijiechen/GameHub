import React from 'react';

import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home';
import Signup from './Signup';
import Profile from './Profile';
export default() => (
	<BrowserRouter>
		<Switch>
			<Route path = "/" exact component = {Home} />		
			<Route path = "/home" exact component = {Home} />
			<Route path = "/signup" exact component = {Signup} />
			<Route path = "/profile" exact component = {Profile} />
			
		</Switch>
	</BrowserRouter>
);
