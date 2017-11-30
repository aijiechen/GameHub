import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';


class Profile extends React.Component{

	state = {
			firstName: '',
			lastName: '',
			email: '',
			id: this.props.match.params.id,
		}

	componentDidMount(props){
		fetch('/api/profile/' + this.state.id)
		.then(d => d.json())
		.then(d => {
			this.setState({
				firstName: d.firstName,
				lastName: d.lastName,
				email: d.email,
			})
			
		}) 

		
	}



	render(props){
		return(
			<div>
			<h1> This Profile Belongs to {this.state.firstName}</h1>
			<p>
			Your email is {this.state.email} <br />
			Your name is {this.state.firstName} {this.state.lastName} <br />
			The id here is {this.state.id}
			</p>
			<p> Click <Link to="/home">Here</Link> to go home</p>
			</div>);
	}
}


export default Profile;