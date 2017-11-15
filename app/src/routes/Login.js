import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Login extends React.Component{

	state = {
			username: '',
			password: '',
			}
	
	change = e => {

		this.setState({
			[e.target.name]:e.target.value
		});
	};

	validate = () => {
		let isError = false;
		const errors = {
			validationError: '',
		};


			this.setState({
				...this.state,
				...errors,
		});
		return isError;
	};

	onSubmit = (e)=>{
		//Precent the default action from occuring
		e.preventDefault();

		const err = this.validate();

		if(!err) {
			//Clear the form
			this.setState({
				username: '',
				password: '',
			})
		};
		axios.post('/api/Login',
			{
				
			})
		.then((result => {
					console.log(result)
				}))

	}

	render(){
		return(
			<MuiThemeProvider>
			<form>	

				<TextField 
				name = "username"
				floatingLabelText = "Username" 
				value = {this.state.username} 
				onChange = {e => this.change(e)}
				errorText = {this.state.usernameError}
				floatingLabelFixed
				/>
				<br />
				
				<TextField 
				name = "password"
				type = "password"
				floatingLabelText = "Password" 
				value = {this.state.password} 
				onChange = {e => this.change(e)}
				errorText = {this.state.passwordError}
				floatingLabelFixed
				/>
				<br />

				<RaisedButton label = "Submit" onClick = {e => this.onSubmit(e)} primary />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<RaisedButton label = "SignUp" onClick = {e => this.onSignup(e)} primary />
			</form>
			</MuiThemeProvider>
			);
	}

}

export default Login;
