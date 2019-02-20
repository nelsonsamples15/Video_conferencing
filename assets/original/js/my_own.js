'use strict';


var socket = io.connect('http://localhost:8080');

var _room, _myID, localStream;

var startButton = document.getElementById('startButton');
var btnCreate = document.getElementById('btn-video-start');

var localVideo = document.querySelector('video#localVideo');
// var remoreVideoContainer = document.querySelector('video#localVideo');




var baseUrl = $(".baseUrl").val();
// var video1 = document.querySelector('video#video1');

// RTCPeerConnection Options
var servers = {
    // Uses Google's STUN server
    iceServers: [
                    {   urls: "turn:asia.myturnserver.net",
                        username: "allie@oopcode.com",
                        credential: "topsecretpassword"
                    }                    
                ]

};

startButton.onclick = start;
btnCreate.onclick = createRoom;

setTimeout(function(){
	// startButton.onclick = start;
	$("#startButton").trigger("click");
	// start();
});

var pc1Local;
var pc1Remote;
var offerOptions = {
  offerToReceiveAudio: 1,
  offerToReceiveVideo: 1
};

/**
 *
 * Generates a random ID.
 *
 * @return a random ID
 */
function generateID() {
    var s4 = function() {
        return Math.floor(Math.random() * 0x10000).toString(16);
    };
    return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
}

function start() {
  console.log('Requesting local stream');

  _myID = generateID();

  navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true
  })
  .then(gotStream)
  .catch(function(e) {
    console.log('getUserMedia() error: ', e);
  });
}

function gotStream(stream) {
  console.log('Received local stream');
  // window.URL.createObjectURL(stream);
  localVideo.srcObject = stream;
 	localStream = stream;

}

// This is to create or join room
function createRoom(){
	console.log('Starting Room');
	var sRoom = $("#room-name").val().trim();

	$.ajax({
		url : baseUrl+'dashboard/check_room',
		type: 'POST',
		data:{sRoom:sRoom},
		beforeSend: function(){},
		success: function(sRes){
			if(sRes == 'open'){
				//save_room(sRoom);

				success_created_room();
				_room = sRoom;


			}else{
				alert("Already use by other user,<br /> Please create different room.");
			}
		}
	})

}

// Save room the database
function save_room(sRoom){
	$.ajax({
		url : baseUrl+'dashboard/save_room',
		type: 'POST',
		data:{sRoom:sRoom},
		beforeSend: function(){},
		success: function(sRes){
			if(sRes == 'success'){
				console.log("Successfully Saved room");
			}else{
				console.log("Failed to save room");
			}
			
		}
	})
}

function success_created_room(){
	var audioTracks = localStream.getAudioTracks();
	  var videoTracks = localStream.getVideoTracks();
	  if (audioTracks.length > 0) {
	    console.log('Using audio device: ' + audioTracks[0].label);
	  }
	  if (videoTracks.length > 0) {
	    console.log('Using video device: ' + videoTracks[0].label);
	  }

	  pc1Local = new RTCPeerConnection(servers);
	  // pc1Remote = new RTCPeerConnection(servers);
	  pc1Local.ontrack = gotRemoteStream1;
	  pc1Local.onicecandidate = iceCallback1Local;
	  // pc1Remote.onicecandidate = iceCallback1Remote;
	  console.log('pc1: created local and remote peer connection objects');

  		localStream.getTracks().forEach(
		    function(track) {
		      pc1Local.addTrack(
		        track,
		        localStream
		      );
		    }
		  );
		  console.log('Adding local stream to pc1Local');
		  pc1Local.createOffer(
		    offerOptions
		  ).then(
		    gotDescription1Local,
		    onCreateSessionDescriptionError
		  );	

}

function iceCallback1Local(event) {
  // handleCandidate(event.candidate, pc1Remote, 'pc1: ', 'local');
  var oData = {
  		'my_id':_myID,
  		'room':_room,
  		'candidate':event.candidate
  	};

  	socket.emit('transfer_event', oData);
}

// add the emitted event
socket.on('transfer_event', function(oData){
	if(oData['room'] == _room){
		if(oData['my_id'] != _myID){

			addIceCandidate(oData)
			 
			  // console.log(prefix + 'New ' + type + ' ICE candidate: ' +
			  //     (candidate ? candidate.candidate : '(null)'));
		}
	}
	
});

function addIceCandidate(oData){
	var oCandidate = oData['candidate'];
	var candidate = new RTCIceCandidate({candidate: oCandidate.candidate});



	
	// pc1Local.addIceCandidate(candidate)
	// 		  .then(
	// 		    onAddIceCandidateSuccess,
	// 		    onAddIceCandidateError
	// 		  );

	pc1Local.addIceCandidate(candidate, onAddIceCandidateSuccess, onAddIceCandidateError);
}






function gotDescription1Local(desc) {
  
   pc1Local.setLocalDescription(desc);

  var oData = {
  		'my_id':_myID,
  		'room':_room,
  		'desc':desc
  	};

  	socket.emit('transfer_desc_local', oData);


  
}

socket.on('transfer_desc_local', function(oData){
	if(oData['room'] == _room){
		if(oData['my_id'] != _myID){

			 pc1Local.setRemoteDescription(oData['desc'], function(){
			 	pc1Local.createAnswer().then(
				    gotDescription1Remote,
				    onCreateSessionDescriptionError
				  );
			 });
			  // Since the 'remote' side has no media stream we need
			  // to pass in the right constraints in order for it to
			  // accept the incoming offer of audio and video.
			  
		}else{

		}
	}
	
});

function gotDescription1Remote(desc) {
  pc1Local.setLocalDescription(desc);

	  var oData = {
	  		'my_id':_myID,
	  		'room':_room,
	  		'desc':desc
	  	};

  	socket.emit('transfer_desc_remote', oData);
  
}

socket.on('transfer_desc_remote', function(oData){
	if(oData['room'] == _room){
		if(oData['my_id'] != _myID){
  			pc1Local.setRemoteDescription(oData['desc']);
		}else{

		}
	}
	
})









// function iceCallback1Remote(event) {
//   handleCandidate(event.candidate, pc1Local, 'pc1: ', 'remote');
// }



// function handleCandidate(candidate, dest, prefix, type) {


//   dest.addIceCandidate(candidate)
//   .then(
//     onAddIceCandidateSuccess,
//     onAddIceCandidateError
//   );
//   console.log(prefix + 'New ' + type + ' ICE candidate: ' +
//       (candidate ? candidate.candidate : '(null)'));
// }

function onAddIceCandidateSuccess() {
  console.log('AddIceCandidate success.');
}

function onAddIceCandidateError(error) {
  console.log('Failed to add ICE candidate: ' + error.toString());
}

function onCreateSessionDescriptionError(error) {
  console.log('Failed to create session description: ' + error.toString());
}

function gotRemoteStream1(e) {

    // video2.srcObject = e.streams[0];
    display_remote_video(e.streams[0])
    console.log('pc1: received remote stream');
  
}

function display_remote_video(stream){
	// remote-videos
	var $videoBox = $("<div class='videoWrap'></div>");
    var $video = $("<video class='videoBox' autoplay></video>");
    $video.attr({"src": window.URL.createObjectURL(stream), "autoplay": "autoplay"});
    $videoBox.append($video);
	$("#remote-videos").append($videoBox);
}









