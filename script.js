
//make a function to play sound
function playSound(e){
//this selects the audio element for the key entered.
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//aleect the key for the animation
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//stops fnction from running all together
if(!audio) return;
//rewind to be able to play a note over and over again.
audio.currentTime = 0;
//play the audio
audio.play();
//add the css class here to make the animation
key.classList.add('playing');

};

//make a transition end event. 

//make a function to remove the transition
function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip it if its not a transform
    this.classList.remove('playing');
};
//select all keys
const keys = document.querySelectorAll(' .key');
//remove the transition
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//add the listener for the key down event. when key is pressed implement the function where e is the event
window.addEventListener('keydown', playSound);