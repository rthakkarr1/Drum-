var keySoundMap = {
    'w': 'Crash',
    'a': 'Kick',
    's': 'Snare',
    'd': 'Tom-1',
    'j': 'Tom-2',
    'k': 'Tom-3',
    'l': 'Tom-4'
};

document.querySelectorAll(".drum").forEach(function(button) {
    button.addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        MakeSound(buttonInnerHTML);
    });
});

document.addEventListener("keydown", function(event) {
    var keyPressed = event.key.toLowerCase();
    if (keySoundMap.hasOwnProperty(keyPressed)) {
        var soundName = keySoundMap[keyPressed];
        MakeSound(soundName);
    }
});

function MakeSound(soundName) {
    var audio = new Audio("sounds/" + soundName.toLowerCase() + ".mp3");
    audio.play();
}
