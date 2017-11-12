import React from 'react';

class Profile extends React.Component{


	state = {
			firstName: '',
			lastName: '',
			email: '',
		}

	componentWillMount(props){
		fetch('/api/profile')
		.then()=> 
	}


	render(){
		return(
			<div>
			"testApp"
			</div>);
	}
}


export default Profile;