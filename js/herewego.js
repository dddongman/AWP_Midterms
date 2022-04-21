var hwga = new Audio("./assets/hwga.mp3");
    var hereWeGo = document.getElementById("hwga");
    hwga.volume = .4;

    hereWeGo.onclick = function () {
        if(hwga.paused) {
            hwga.play()
        } else {
            hwga.pause();
            hwga.currentTime = 0;
        }
    }