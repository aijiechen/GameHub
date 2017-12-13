import React, { Component } from 'react';
import '../css/TicTacToe.css';
import GlobalChat from './globalChat';
import io from 'socket.io-client';


class Gameroom extends React.Component{


	constructor(props){
		super(props);

		this.state = {
			username: '',
			roomnum: '',
			messages: [],
		}
	}
	componentDidMount(){
    this.socket = io('localhost:8000');


  	}


  joinRoom(){
  	const roomID = this.state.roomnum;
  	if(!roomID){
  		alert('Enter your room ID')
  	}
  	this.socket.emit('joinGame', {room: roomID});

  }

  createRoom(){
  	this.socket.emit('createGame');

  }


  render(){
		return(
			<div>
				<h1>Join or Create a Room</h1>

				<button onClick = {this.createRoom} className="btn btn-primary form-control">Create</button>
				<input type="text" placeholder="Room Number" className="form-control" value={this.state.roomnum} onChange={ev => this.setState({roomnum: ev.target.value})}/>
                <br/>
                <button onClick = {this.joinRoom} className="btn btn-primary form-control">Join</button>
			</div>

			)
	}

}





export default Gameroom;