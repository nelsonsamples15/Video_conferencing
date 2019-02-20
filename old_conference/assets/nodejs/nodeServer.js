var socket = require( 'socket.io' ),
	express = require('express'),
	http = require('http'),
	nodestatic = require('node-static'),
	cors = require('cors'),
	app = express(),
	server = http.createServer(app),
	io = socket.listen(server);


	console.log("connected");




	io.sockets.on('connection', function(client) {


		// For Class Chat
		client.on('display_class_chat', function(oData){
			// console.log(oData);
			io.sockets.emit('display_class_chat', oData);

		});
		// End For Class Chat

		// Old Video Conference
		function log(){
	        var array = [">>> Message from server: "];
	        for (var i = 0; i < arguments.length; i++) {
		  	    array.push(arguments[i]);
	        }
		    client.emit('log', array);
		}

		client.on('message', function (message) {
			log('Got message: ', message);
	        client.broadcast.to(client.room).emit('message', message);
	        // console.log(message);
		});
	    
		client.on('create or join', function (message) {
	        var room = message.room;
	        client.room = room;
	        var participantID = message.from;
	        configNameSpaceChannel(participantID);
	        
			var numClients = io.of('/').in(room).clients.length;
			// io.of('/').in(room).clients.length;

			log('Room ' + room + ' has ' + numClients + ' client(s)');
			log('Request to create or join room', room);

			if (numClients == 0){
				client.join(room);
				client.emit('created', room);
			} else {
				// io.sockets.in(room).emit('join', room);
				io.of('/').in(room).emit('join', room);
				client.join(room);
				client.emit('joined', room);
			}
		});
	    
	    // Setup a communication channel (namespace) to communicate with a given participant (participantID)
		function configNameSpaceChannel(participantID) {
	        var socketNamespace = io.of('/').in(participantID);
	        
	        socketNamespace.on('connection', function (socket){
	            socket.on('message', function (message) {
	                // Send message to everyone BUT sender
	                // socket.broadcast.emit('message', message);
	                socket.broadcast.to(message.room).emit('message', message);
	            });
	        });
	    }
	    // end old conference




	    // New Video Conference
	    // convenience function to log server messages on the client
			// function log(){
			// 	var array = [">>> Message from server: "];
			//   for (var i = 0; i < arguments.length; i++) {
			//   	array.push(arguments[i]);
			//   }
			//     client.emit('log', array);
			// }

			// // when receive sdp, broadcast sdp to other user
			// client.on('sdp', function(data){
			// 	// console.log('Received SDP from ' + client.id);
			// 	client.to(data.room).emit('sdp received', data.sdp);
			// });

			// // when receive ice candidate, broadcast sdp to other user
			// client.on('ice candidate', function(data){
			// 	// console.log('Received ICE candidate from ' + client.id + ' ' + data.candidate);
			// 	// client.to(data.room).emit('ice candidate received', data.candidate);
			// 	client.broadcast.to(data.room).emit('ice candidate received', data.candidate);
			// });

			// client.on('message', function (message) {
			// 	log('Got message:', message);
		 //    // for a real app, would be room only (not broadcast)
			// 	client.broadcast.emit('message', message);
			// });

			// client.on('create or join', function (room) {
			// 	// join room
			// 	var existingRoom = io.nsps['/'].adapter.rooms[room];
			// 	var clients = [];


			// 	if(existingRoom){
			// 		// clients = Object.keys(existingRoom);
			// 		clients = existingRoom.length;

			// 	}


			// 	if(clients.length == 0){
			// 		client.join(room);
			// 		io.to(room).emit('empty', room);
			// 	}
			// 	else if(clients > 0){
			// 		client.join(room);
			// 		// var numClients =  io.of('/').in(room).clients.length;
			// 		// io.of('/').in(room).emit('join', room);
			// 		client.to(room).emit('joined', room, clients);
			// 		// console.error(clients);

			// 	}else if(clients > 10){
			// 		// only allow 2 users max per room
			// 		client.emit('full', room);
			// 	}

			// 	console.error(clients);

				
			// });

			// client.on('error', function(error){
			// 	console.error(error);
			// })

		

	});

	server.listen( 8080 );