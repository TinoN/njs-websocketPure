"use strict";

// Optional. You will see this name in eg. 'ps' or 'top' command
process.title = 'node-chat';

var WebSocketServer = require('ws').Server;

var wsServer = new WebSocketServer({
	port: 3000
});

wsServer.on('connection', function(wSocket) {

	wSocket.on('message', function(message) {

        	console.log('received: %s', message);
    });

    wSocket.send('something');
});