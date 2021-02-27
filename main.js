const audioA = new Audio('sounds/clap.wav');
const audioS = new Audio('sounds/hihat.wav');
const audioD = new Audio('sounds/kick.wav');
const audioF = new Audio('sounds/openhat.wav');
const audioG = new Audio('sounds/boom.wav');
const audioH = new Audio('sounds/ride.wav');
const audioJ = new Audio('sounds/snare.wav');
const audioK = new Audio('sounds/tom.wav');
const audioL = new Audio('sounds/tink.wav');




window.addEventListener('keydown', function(event) {

    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`[data-key="${event.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

    const keys = document.querySelectorAll('.key');
    
    keys.forEach(function(key) {
        key.addEventListener('transitionend', function(event){
            if (event.propertyName !== 'transform') return;
            this.classList.remove('playing');
        })
    })
    
})