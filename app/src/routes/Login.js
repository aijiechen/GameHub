import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Route, Redirect} from 'react-router-dom';
class Login extends React.Component{

	state = {
			email: '',
			password: '',
			passwordError: '',
			redirectHome: false,
			redirectSignup:false,
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
	onRegister = (e) =>{
		e.preventDefault();

		this.setState({redirectSignup:true});
	};
	onSubmit = (e)=>{
		//Precent the default action from occuring
		e.preventDefault();

		const err = this.validate();

		if(!err) {
			//Clear the form
			this.setState({
				email: '',
				password: '',
			})
			axios.post('/api/login',
			{
				email: this.state.email,
				password: this.state.password
			})
			.then((response) =>
					{
						if(!response.data){
							this.setState({
								passwordError:"Wrong Password",
							})
						}
						else{
							this.setState({
								redirectHome:true,
							})
						}
					} 
					
				);
		};

	};

	render(){
		const {redirectSignup } = this.state;

		if (redirectSignup){
					return <Redirect to = "/signup"/>
				}

		const{redirectHome } = this.state;

		if(redirectHome){
			return <Redirect to = "/home"/>
		}
		return(

			<MuiThemeProvider>
			<form>	



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
				floatingLabelText = "Password" 
				value = {this.state.password} 
				onChange = {e => this.change(e)}
				errorText = {this.state.passwordError}
				floatingLabelFixed
				/>
				<br />

				
				
				<RaisedButton label = "Submit" onClick = {e => this.onSubmit(e)} primary />
				<RaisedButton label = "Signup" onClick = {e => this.onRegister(e)} primary />
			</form>
			</MuiThemeProvider>
			);
	}

}

export default Login;
