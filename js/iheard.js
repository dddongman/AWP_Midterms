var ihym = new Audio("./assets/ihym.mp3");
    var iHeard = document.getElementById("ihym");
    ihym.volume = .4;

    iHeard.onclick = function () {
        if(ihym.paused) {
            ihym.play()
        } else {
            ihym.pause();
            ihym.currentTime = 0;
        }
    }