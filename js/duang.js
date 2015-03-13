function play() {
	var zone = document.getElementById('audio-element');
	var audio = initAudioElt();
	zone.appendChild(audio);
	audio.play();
	// remove audio element when complete
	setTimeout(function() {
		zone.removeChild(audio);
	}, 4000);
}

function initAudioElt() {
	var elt = document.createElement('audio');
	elt.setAttribute('preload', 'auto');
	elt.setAttribute('autoplay', 'autoplay');
	elt.setAttribute('src', 'audio/duang.mp3');
	return elt;
}
