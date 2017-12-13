const express = require('express');
const expressSession = require('express-session');
const passport = require('./middlewares/authentication');
const socket = require('socket.io');
const PORT = process.env.PORT || 8000;

const app = express();


//Socket io functions
const server = require('http').createServer(app);
const io = require('socket.io')(server);

var roomno = 1;
var rooms = 0;
server.listen(8000,'0.0.0.0', function(){
	console.log('Listen to port: ' + 8000);
});
io.on('connection', (socket) => {
	console.log(socket.id);
	console.log('socket on');
	socket.on('SEND_MESSAGE', function(data){
		io.emit('RECEIVE_MESSAGE', data)
		console.log(data)
	})

    socket.on('SEND_CLICK', function(data){
        io.emit('RECEIVE_CLICK', data)
        console.log(data)
    })
    
	socket.on('createGame', function(data){
		socket.join('room-' + ++rooms);
		socket.emit('newGame', {name: data.name, room: 'room-'+rooms});
	});

	socket.on('joinGame', function(data){
        var room = io.nsps['/'].adapter.rooms[data.room];
        if( room && room.length == 1){
            socket.join(data.room);
            console.log(io.nsps['/'].adapter.rooms[data.room]);
            socket.broadcast.to(data.room).emit('player1', {});
            socket.emit('player2', {name: data.name, room: data.room })
        }
        else {
            socket.emit('err', {message: 'Sorry, The room is full!'});
        }
    });

    socket.on('playTurn', function(data){
        socket.broadcast.to(data.room).emit('turnPlayed', {
            tile: data.tile,
            room: data.room
        });
    });
    socket.on('gameEnded', function(data){
        socket.broadcast.to(data.room).emit('gameEnd', data);
    })
    /*
    //Increase roomno 2 clients are present in a room.
   if(io.nsps['/'].adapter.rooms["room-"+roomno] && io.nsps['/'].adapter.rooms["room-"+roomno].length > 1) roomno++;
   socket.join("room-"+roomno);

   socket.leave("room-"+roomno);
   //Send this event to everyone in the room.
   io.sockets.in("room-"+roomno).emit('connectToRoom', "You are in room no. "+roomno);*/
});





// Access Body Data
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable sessions & passport
app.use(expressSession(({ secret: 'keyboard cat', resave: false, saveUninitialized: true })));
app.use(passport.initialize());
app.use(passport.session());

// Load Views
const handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({
  layoutsDir: './views/layouts',
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);

// Load Controller
const controllers = require('./controllers');
app.use('/api',controllers);

// Load Models
const models = require('./models');
models.sequelize.sync({force: false})
  .then(() => {
    //app.listen(PORT);
  });


