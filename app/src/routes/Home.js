import React from 'react';
import axios from 'axios';





function Game(props){

	return (
	<div>
	<p>{props.data.title}</p>
	</div>
	);
}


class Home extends React.Component{

	state = {
		//userId: '',
		firstName: '',
		lastName: '',
		email: '',
		games: [],
		gameId: '',
	}

	componentDidMount(props){
		axios.get('/api/home')
		.then(body => {
			this.setState({
				firstName: body.data.firstName,
				lastName: body.data.lastName,
				email: body.data.email,
			})
			
		}) 

		axios.get('/api/games')
		.then(body => {
			const games = body.data.map(game=>{
				return <Game data={game} key = {game.title} />;
			});

			this.setState({
				games: games,
			});
		});
	}
	
	

	render(){
		return(
	<div> <h1>Welcome home</h1>
	<p> Your name is {this.state.firstName} {this.state.lastName};</p>
	<p> Your email is {this.state.email} </p>
	<div>
	<h3> Our List of Games Include</h3>
	{this.state.games}
	</div>

	

	</div>
	)}


}

export default Home;