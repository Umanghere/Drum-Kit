function playSound(e){
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
    // console.log(key)
    if(!audio) return;  //stop the function from running all together
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing")
}
function removeTransition(e){
    // console.log(e)
    if(e.propertyName !== "transform") return; //skip it if it's not a transform
    this.classList.remove("playing")
}

const keys = document.querySelectorAll(".key"); 

keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener("keydown", playSound) 