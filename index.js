require('./app');
navigator.getUserMedia_ = (   navigator.getUserMedia
                           || navigator.webkitGetUserMedia 
                           || navigator.mozGetUserMedia 
                           || navigator.msGetUserMedia);

navigator.getUserMedia_({video:true,audio:false}, function(stream){
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

}, function(err){
	console.error(err);
});


