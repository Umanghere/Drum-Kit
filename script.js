function playSound(event) {
    let keyCode;
    if (event.type === "keydown") {
        keyCode = event.keyCode;
    } else if (event.type === "click") {
        // Retrieve the data-key attribute from the clicked div
        const clickedKey = event.target.closest('.key');
        if (!clickedKey) return;
        keyCode = parseInt(clickedKey.getAttribute('data-key'));
    } else {
        return; // Exit function if event type is neither keydown nor click
    }

    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);

    if (!audio) return;  // Stop the function if audio element is not found

    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}

function removeTransition(event) {
    if (event.propertyName !== "transform") return; // Skip if it's not a transform
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', playSound));

window.addEventListener("keydown", playSound);
window.addEventListener("click", playSound);

