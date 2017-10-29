var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head><title>My App</title></head>

        <body>
        <h1>GameHub</h1>
        <h3>The Mini-Game Network</h3>
        <p>------------------------</p>
        {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;