import React, { Component } from 'react';
import '../css/TicTacToe.css';
import GlobalChat from './globalChat';
import io from 'socket.io-client';
/*
 * Changes from original tutorial
 *  - Here we import Component, so we can replace
 *    class Square extends React.Component
 *    with
 *    class Square extends Component
 */




function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function chatBox(){
  return(
    <div>
    <globalChat />
    </div>)
}

class Board extends Component {
  
  
  renderSquare(i) {
    return (<Square value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}/> );
  }

  render() {
    return (
      <div>

        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      myTurn: true,
    };
  }

  componentDidMount(){
    this.socket = io('localhost:8000');
    this.socket.on('RECEIVE_CLICK', function(data){
      displayClick(data)
    })


    const displayClick = data => {
      const squares = this.state.squares.slice();
      const i = data.square_num;
      /*this.setState({
        myTurn: !this.state.myTurn
      })*/
      if (calculateWinner(squares) || squares[i]) {
      return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      })
    }
  }


  
  handleClick(i) {

    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({

        squares: squares,
        xIsNext: !this.state.xIsNext,
        
    });

    this.socket.emit('SEND_CLICK', {
      square_num: i,
      letter: squares[i],
      nextLetter: this.state.xIsNext
    })
  }


  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
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
            <a className="navbar-brand js-scroll-trigger" href="/">GameHub</a>
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
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      <h1>Multiplayer Tic-Tac-Toe</h1> 

      <div className="game">
        <div className="game-board">

          <Board 
                squares={this.state.squares}
                onClick={(i) => this.handleClick(i)} />
        </div>

        <div className="game-info">
          <div>{status}</div>
        </div>
      </div>
      <GlobalChat />
      </div>
    );
  }
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default Game;
