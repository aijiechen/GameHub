import React from 'react';

import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import TicTacToe from './TicTacToe';
import globalChat from './globalChat';
import Gameroom from './gameroom';
export default() => (
	<BrowserRouter>
		<Switch>
			<Route path = "/" exact component = {Home} />		
			<Route path = "/home" exact component = {Home} />
			<Route path = "/signup" exact component = {Signup} />
			<Route path = "/login" exact component = {Login} />
			<Route path = "/profile/:id" exact component = {Profile} />
			<Route path = "/tictactoe" exact component = {TicTacToe} />
			<Route path = "/globalChat" exact component = {globalChat} />
			<Route path = "/gameroom" exact component = {Gameroom} />
			
		</Switch>
	</BrowserRouter>
);
