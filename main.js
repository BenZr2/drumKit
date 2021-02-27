const audioA = new Audio('sounds/clap.wav');
const audioS = new Audio('sounds/hihat.wav');
const audioD = new Audio('sounds/kick.wav');
const audioF = new Audio('sounds/openhat.wav');
const audioG = new Audio('sounds/boom.wav');
const audioH = new Audio('sounds/ride.wav');
const audioJ = new Audio('sounds/snare.wav');
const audioK = new Audio('sounds/tom.wav');
const audioL = new Audio('sounds/tink.wav');


const aKey = document.getElementById('A');


document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        audioA.play();
    }
    else if (event.key === 's') {
        audioS.play();
    }
    else if (event.key === 'd') {
        audioD.play();
    }
    else if (event.key === 'f') {
        audioF.play();
    }
    else if (event.key === 'g') {
        audioG.play();
    }
    else if (event.key === 'h') {
        audioH.play();
    }
    else if (event.key === 'j') {
        audioJ.play();
    }
    else if (event.key === 'k') {
        audioK.play();
    }
    else if (event.key === 'l') {
        audioL.play();
    }
    
})