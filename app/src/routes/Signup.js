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
			passwordVerification: '',
			passwordVerificationError: '',
		}
	
	change = e => {

		this.setState({
			[e.target.name]:e.target.value
		});
	};


	validate = () => {
		let isError = false;
		const errors = {
			usernameError: '',
			emailError: '',
			passwordError: '',
			passwordVerificationError: '',
		};
		if (this.state.username.length < 5)
		{
			isError = true;
			errors.usernameError = "Username needs to be atleast 5 characters";

		}

		if (this.state.email.indexOf('@') === -1)
		{
			isError = true;
			errors.emailError = "Invalid Email";
		}

		if (this.state.password.length < 8 || this.state.password === this.state.password.toLowerCase()
			|| this.state.password === this.state.password.toUpperCase() /*|| !isAlphaNumeric(this.state.password)*/)
		{
			isError = true;
			errors.passwordError = "Password should be more than 8 characters, contain uppercase, lowercase letters and numbers"
		}

		if(this.state.password != this.state.passwordVerification)
		{
			isError = true;
			errors.passwordVerificationError = "Passwords don't match"
		}

			this.setState({
				...this.state,
				...errors,
		});
		return isError;
	};


	// isAlphaNumeric = (str) => 
	// {
	// 	var code, i, len;

	// 	for (i = 0, len = str.length; i < len; i++) 
	// 	{
	// 	  code = str.charCodeAt(i);
	// 	  if (!(code > 47 && code < 58) && // numeric (0-9)
	// 	     !(code > 64 && code < 91) && // upper alpha (A-Z)
	// 	     !(code > 96 && code < 123))  // lower alpha (a-z) 
	// 	  {
	// 	      return false;
	// 	  }
	// 	}
	// 	  return true;
	// };

	onSubmit = (e)=>{
		//Precent the default action from occuring
		e.preventDefault();

		const err = this.validate();

		if(!err) {
			//Clear the form
			this.setState({
				emailError: '',
				usernameError: '',
				password: '',
			})
		};

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
				floatingLabelText = "Username" 
				value = {this.state.username} 
				onChange = {e => this.change(e)}
				errorText = {this.state.usernameError}
				floatingLabelFixed
				/>

				<br />
				<TextField 
				name = "email"
				floatingLabelText = "E-mail" 
				value = {this.state.email} 
				onChange = {e => this.change(e)}
				errorText = {this.state.emailError}
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

				<br />
				<TextField 
				name = "passwordVerification"
				type = "passwordVerification"
				floatingLabelText = "Re-Type Password" 
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