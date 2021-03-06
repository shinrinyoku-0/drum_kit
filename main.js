function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if(!audio) return; 
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function playSoundKey(e) {
    // if(e.target.tagName!="KBD") return;
    console.log(this);
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition))

keys.forEach((key) => key.addEventListener('click', playSoundKey, {capture: true}));
