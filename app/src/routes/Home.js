import React from 'react';
import axios from 'axios';
import './css/freelancer.css';


import './img/portfolio/pingpong.png';
import './img/portfolio/tic.png';
import profileimg from './img/profile.png';
import tictactoeimg from './img/portfolio/tic.png';
import pingpongimg from './img/portfolio/pingpong.png';

class Home extends React.Component{

	state = {
		//userId: '',
		firstName: '',
		lastName: '',
		email: '',
		games: [],
		gameId: '',
	}

	componentDidMount(props){
		axios.get('/api/home')
		.then(body => {
			this.setState({
				firstName: body.data.firstName,
				lastName: body.data.lastName,
				email: body.data.email,
			})
			
		}) 

		// axios.get('/api/games')
		// .then(body => {
		// 	const games = body.data.map(game=>{
		// 		return <Game data={game} key = {game.title} />;
		// 	});

		// 	this.setState({
		// 		games: games,
		// 	});
		// });
	}
	
	

	render(){
		return(

	<div>
	<Homepage />


	</div>
	)}


}


class Homepage extends React.Component{
  render(){
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content />
        <meta name="author" content />
        <title>GameHub</title>
        {/* Bootstrap core CSS */}
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        {/* Custom fonts for this template */}
        <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
        {/* Custom styles for this template */}
        <link href="./css/freelancer.min.css" rel="stylesheet" />
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">Welcome</a>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#portfolio">Game</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/login">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/signup">Signup</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Header */}
        <header className="masthead">
          <div className="container">
            <img className="img-fluid" src={profileimg} alt />
            <div className="intro-text">
              <span className="name">GameHub</span>
              <hr className="star-light" />
              <span className="skills">Enjoy your game, enjoy your life</span>
            </div>
          </div>
        </header>
        {/* game Grid Section */}
        <section id="portfolio">
          <div className="container">
            <h2 className="text-center">Game</h2>
            <hr className="star-primary" />
            <div className="row">
              <div className="col-sm-6 portfolio-item">
                <a className="portfolio-link" href="#portfolioModal1" data-toggle="modal">
                  <div className="caption">
                    <div className="caption-content">
                      <i className="fa fa-search-plus fa-3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src={tictactoeimg} alt style={{width: 480, height: 480}} />
                </a>
              </div>
              <div className="col-sm-6 portfolio-item">
                <a className="portfolio-link" href="#portfolioModal2" data-toggle="modal">
                  <div className="caption">
                    <div className="caption-content">
                      <i className="fa fa-search-plus fa-3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src={pingpongimg} alt style={{width: 480, height: 480}} />
                </a>
              </div>
            </div>
          </div>
        </section>  
        {/* login Section */}
        <section id="about">
          <div className="container">
            <h2 className="text-center">Login</h2>
            <hr className="star-primary" />
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label>Username</label>
                      <input className="form-control" id="name" type="text" placeholder="UserName" required data-validation-required-message="Please enter your name." />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label>PassWord</label>
                      <input className="form-control" id="email" type="email" placeholder="Passworld" required data-validation-required-message="Please enter your email address." />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <br />
                  <div id="success" />
                  <div className="form-group">
                    <button type="submit" className="btn btn-success btn-lg" id="sendMessageButton">login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Sign up Section */}
        <section id="contact">
          <div className="container">
            <h2 className="text-center">Sign up</h2>
            <hr className="star-primary" />
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label>Username</label>
                      <input className="form-control" id="name" type="text" placeholder="UserName" required data-validation-required-message="Please enter your Username." />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label>Passworld</label>
                      <input className="form-control" id="email" type="email" placeholder="Passworld" required data-validation-required-message="Please enter your email address." />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label>Re-password</label>
                      <input className="form-control" id="phone" type="tel" placeholder="Re-password" required data-validation-required-message="Please re-enter your Passworld." />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <br />
                  <div id="success" />
                  <div className="form-group">
                    <button type="submit" className="btn btn-success btn-lg" id="sendMessageButton">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default Home;