require('./app');
// navigator.getUserMedia_ = (   navigator.mediaDevices.getUserMedia
//                            || navigator.mediaDevices.webkitGetUserMedia 
//                            || navigator.mediaDevices.mozGetUserMedia 
//                            || navigator.mediaDevices.msGetUserMedia);

// var getUserMedia_ = navigator.getUserMedia 

// getUserMedia_({video:true,audio:false}, function(stream){
// 	var Peer = require('simple-peer');
// 	var peer = new Peer({
// 		initiator:location.hash === '#init',
// 		trickle:false,
// 		stream:stream
// 	});

// 	peer.on('signal',function(data){
// 		console.log(data);
// 		$('.loader').hide();
// 		$('#myId').val(JSON.stringify(data));
// 	});

// 	peer.on('connect', function () {
// 		console.log('CONNECT')
// 		peer.send('whatever' + Math.random())
// 	})

// 	peer.on('data', function (data) {
// 		console.log('data: ' + data)
// 	})

// 	peer.on('stream',function(stream){
// 		var video =  document.createElement('video');
// 		$('#video-area').append(video);
// 		video.src = window.URL.createObjectURL(stream);
// 		video.play();
// 	});

// 	$("#connect").on('click',function(){
// 		var otherId = $("#otherId").val();
// 		peer.signal(otherId);
// 	});

// }, function(err){
// 	console.error(err);
// });


// var SimplePeer = require('simple-peer')

// // get video/voice stream 
navigator.getUserMedia({ video: true, audio: true }, gotMedia, function () {})
function gotMedia(stream) {
	var Peer = require('simple-peer');
	var peer = new Peer({
		initiator:location.hash === '#init',
		trickle:false,
		stream:stream
	});

	peer.on('signal',function(data){
		console.log(data);
		$('.loader').hide();
		$('#myId').val(JSON.stringify(data));
	});

	peer.on('connect', function () {
		console.log('CONNECT')
		peer.send('whatever' + Math.random())
	})

	peer.on('data', function (data) {
		console.log('data: ' + data)
	})

	peer.on('stream',function(stream){
		var video =  document.createElement('video');
		$('#video-area').append(video);
		video.src = window.URL.createObjectURL(stream);
		video.play();
	});

	$("#connect").on('click',function(){
		var otherId = $("#otherId").val();
		peer.signal(otherId);
	});
}
// function gotMedia (stream) {
//  var peer1 = new SimplePeer({ initiator: true, stream: stream })
//  var peer2 = new SimplePeer()

//  peer1.on('signal', function (data) {
// 	 peer2.signal(data)
//  })

//  peer2.on('signal', function (data) {
// 	 peer1.signal(data)
//  })

//  peer2.on('stream', function (stream) {
// 	 // got remote video stream, now let's show it in a video tag 
// 	 var video = document.querySelector('video')
// 	 console.log(stream);
// 	 video.src = window.URL.createObjectURL(stream)
// 	 video.play()
//  })
// }