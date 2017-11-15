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
			console.log(body);	
			
		}) 
	
	}

	

	render(){
		return(
	<div> <h1>Welcome home</h1>
	<p> Your name is TestName;</p>
	

	</div>
	)}


}

export default Home;