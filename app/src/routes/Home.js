import React from 'react';
import axios from 'axios';
import './css/freelancer.css';


import './img/portfolio/pingpong.png';
import './img/portfolio/tic.png';
import profileimg from './img/profile.png';
import tictactoeimg from './img/portfolio/tic.png';
import pingpongimg from './img/portfolio/pingpong.png';

class Home extends React.Component{
//<Homepage />
	state = {
		//userId: '',
		firstName: '',
		lastName: '',
		email: '',
		games: [],
		gameId: '',
    loggedIn: '',
	}

	componentDidMount(props){
		// axios.get('/api/home')
		// .then(body => {
		// 	this.setState({
		// 		firstName: body.data.firstName,
		// 		lastName: body.data.lastName,
		// 		email: body.data.email,
		// 	})
			
		// }) 
    fetch('/api/profile/' + this.state.id)
    .then(d => d.json())
    .then(d => {
      this.setState({
        firstName: d.firstName,
        lastName: d.lastName,
        email: d.email,
      })
      
    }) 


		axios.get('/api/games')
		.then(body => {
			const games = body.data.map(game=>{
				return ;

			});

			this.setState({
				games: games,
			});
		});
	}
	
	loggedIn = () => {
    if(this.state.firstName === '' ){
      return (true);
    }
    return (false);
  }
  
  render(){

    return this.loggedIn() ? <LoginHomePage/> : <Homepage/> 
  }
  
	


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
            <a className="navbar-brand js-scroll-trigger" href="#page-top">Welcome </a>
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
                <a className="nav-link js-scroll-trigger" href="/tictactoe">
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
        
      </div>
    );
  }
};


class LoginHomePage extends React.Component{
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
                  <a className="nav-link js-scroll-trigger" href="/logout">Logout</a>
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
        
      </div>
    );
  }
};

export default Home;