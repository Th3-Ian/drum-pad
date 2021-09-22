// app.js

function removeTransition(e) {
	if(e.propertyName !== 'transform') return;
	e.target.classList.remove('playing');

	console.log('transform')
};

window.addEventListener('keydown', function (e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const pad = document.querySelector(`.drum-pad[data-key="${e.keyCode}"]`);
	if(!audio) return;

	pad.classList.add('playing');
	audio.currentTime = 0;
	audio.play();
});

const keys = Array.from(document.querySelectorAll('.drum-pad'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
