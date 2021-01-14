

var audio = new Audio("./media/sound1.mp3");


let darkButton = document.querySelector('#dark-button')

darkButton.addEventListener('click', (e) => {
    audio.play()
})

