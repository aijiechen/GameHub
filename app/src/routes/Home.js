import React from 'react';

class Home extends React.Component{

	state = {
		//userId: '',
		firstName: '',
		lastName: '',
		email: '',
	}

	componentDidMount(props){
		fetch('/api/home')
		.then(data => data.json())
		.then(data => {
			console.log(data);	
		}) 
	
	}

	

	render(){
		return(
	<div> <h1>Welcome home</h1>
	<p> Your name is TestName;</p>
	

	</div>
	);
	}


}

export default Home;