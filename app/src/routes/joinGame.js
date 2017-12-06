import React from 'react';
import io from 'socket.io-client';

class globalChat extends React.Component{

	constructor(props){
		super(props);


		this.socket = io.connect();

		this.room = "abc123";

		this.socket.on('connect', function(){
			socket.emit('room',room);
		});

		this.socket.on('message', function(data){
			console.log('Incoming Message: ', data);
		});
	}

	render(){
		return(
			<div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Global Chat</div>
                                <hr/>
                                <div className="messages">
                                	{this.state.messages.map(message => {
								        return (
								            <div>{message.author}: {message.message}</div>
								        )
   									 })}
                                </div>
                                <div className="footer">
                                    <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                                    <br/>
                                    <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                    <br/>
                                    <button onClick = {this.sendMessage} className="btn btn-primary form-control">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
	}

}

export default globalChat;