import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'

var React = require('react');
var DefaultLayout = require('../layouts/main');

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username:'',
			password:''
		}
	}
	render() {
		return (
			<DefaultLayout title = {this.props.title}>
				<div> Hello {this.props.name}</div>
				<div>
				<MuiThemeProvider>
				<TextField
					hintText = "Enter your username"
					floatingLabelText= "Username"
					onChange = {(event,newValue) =>
						this.setState({username: newValue})}
				/>
				<br />
				<TextField
					type = "password"
					hintText = "Enter your Password"
					floatingLabelText = "Password"
					onChange = {(event,newValue) => this.setState({password: newValue})}
				/>
				<br />
				<RaisedButton label = "Submit" primary = {true} style = {style}
				onClick = {(event) => this.handleClick(event)} />
				</MuiThemeProvider>
				</div>
			</DefaultLayout>

			);

	}
	
}
const style = {
		margin: 15,
	};
module.exports = Login;