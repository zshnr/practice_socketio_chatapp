var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

// app.use('/', express.static(__dirname + '/'));

io.on('connection', function(socket){
	// socket.emit('connect', "a user connected");
	
	// io.emit('connection', "a user connected");

	socket.on('disconnect', function(){
		console.log('a user disconnected');
	});
	
	socket.on('chatmessage', function(msg){
		console.log('message: ' + msg);
		io.emit('chatmessage', msg);
	});
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});

module.exports = http;