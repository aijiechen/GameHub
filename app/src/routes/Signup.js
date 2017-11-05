import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class Signup extends React.Component{

	
		state = {
			firstName: '',
			firstNameError: '',
			lastName: '',
			lastNameError: '',
			username: '',
			usernameError: '',
			email: '',
			emailError: '',
			password: '',
			passwordError: '',
		}
	
	change = e => {

		this.setState({
			[e.target.name]:e.target.value
		});
	};


	onSubmit = (e)=>{
		e.preventDefault();
		this.setState({
			firstName: '',
			lastName: '',
			username: '',
			email: '',
			password: '',
		})

	}
	render(){
		return(
			<MuiThemeProvider>
			<form>
				<TextField 
				name = "firstName"
				floatingLabelText = "First name" 
				value = {this.state.firstName} 
				onChange = {e => this.change(e)}
				errorText = {this.state.firstNameError}
				floatingLabelFixed
				/>
				<br />

				<TextField 
				name = "lastName"
				floatingLabelText = "Last name" 
				value = {this.state.lastName} 
				onChange = {e => this.change(e)}
				errorText = {this.state.lastNameError}
				floatingLabelFixed
				/>

				<br />
				<TextField 
				name = "username"
				floatingLabelText = "username" 
				value = {this.state.username} 
				onChange = {e => this.change(e)}
				errorText = {this.state.usernameError}
				floatingLabelFixed
				/>

				<br />
				<TextField 
				name = "email"
				floatingLabelText = "email" 
				value = {this.state.email} 
				onChange = {e => this.change(e)}
				errorText = {this.state.emailError}
				floatingLabelFixed
				/>

				<br />
				<TextField 
				name = "password"
				type = "password"
				floatingLabelText = "password" 
				value = {this.state.password} 
				onChange = {e => this.change(e)}
				errorText = {this.state.passwordError}
				floatingLabelFixed
				/>
				<br />

				<RaisedButton label = "Submit" onClick = {e => this.onSubmit(e)} primary />
			</form>
			</MuiThemeProvider>
			);
	}





}

export default Signup;