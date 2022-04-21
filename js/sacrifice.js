var scrf = new Audio("./assets/sacrifice.mp3");
    var sacrifice = document.getElementById("scrf");
    scrf.volume = .4;

    sacrifice.onclick = function () {
        if(scrf.paused) {
            scrf.play()
        } else {
            scrf.pause();
            scrf.currentTime = 0;
        }
    }