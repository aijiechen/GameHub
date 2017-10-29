var React = require('react');
var DefaultLayout = require('../layouts/main');

class Profile extends React.Component {
	render() {
		return (
			<DefaultLayout title = {this.props.title}>
				<div> Hello {this.props.fullName}</div>
			</DefaultLayout>
			);

	}
}

module.exports = Profile;