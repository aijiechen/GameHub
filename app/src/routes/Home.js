import React from 'react';
import axios from 'axios';

class Home extends React.Component{

	state = {
		//userId: '',
		firstName: '',
		lastName: '',
		email: '',
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
	
	}

	

	render(){
		return(
	<div> <h1>Welcome home</h1>
	<p> Your name is {this.state.firstName} {this.state.lastName};</p>
	<p> Your email is {this.state.email} </p>
	

	</div>
	)}


}

export default Home;