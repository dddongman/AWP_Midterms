var gsln = new Audio("./assets/gasoline.mp3");
    var gasol = document.getElementById("gasoline");
    gsln.volume = .4;

    gasol.onclick = function () {
        if(gsln.paused) {
            gsln.play()
        } else {
            gsln.pause();
            gsln.currentTime = 0;
        }
    }