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

var addRippleEffect = function (e) {
    var target = e.target;
    if (target.tagName.toLowerCase() !== 'button') return false;
    var rect = target.getBoundingClientRect();
    var ripple = target.querySelector('.ripple');
    if (!ripple) {
        ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
        target.appendChild(ripple);
    }
    ripple.classList.remove('show');
    var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
    var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
    ripple.style.top = top + 'px';
    ripple.style.left = left + 'px';
    ripple.classList.add('show');
    return false;
}

document.addEventListener('click', addRippleEffect, false);
