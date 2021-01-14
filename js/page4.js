// Sound on page 3
var audio = new Audio("./media/sound2.mp3");
let soundDiv = document.querySelector('#sound-div')

soundDiv.addEventListener('click', (e) => {
    audio.play()
})
