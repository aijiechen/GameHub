var React = require('react');
var DefaultLayout = require('../layouts/main');

class Home extends React.Component {
	render() {
		return (
			<DefaultLayout title = {this.props.title}>
				<div> Hello {this.props.name}</div>
			</DefaultLayout>
			);

	}
}

module.exports = Home;