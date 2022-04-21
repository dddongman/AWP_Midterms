var tmb = new Audio("./assets/tmb.mp3");
    var takeMy = document.getElementById("tmb");
    tmb.volume = .4;

    takeMy.onclick = function () {
        if(tmb.paused) {
            tmb.play()
        } else {
            tmb.pause(); 
            tmb.currentTime = 0;
        }
    }