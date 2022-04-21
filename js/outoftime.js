var outo = new Audio("./assets/out_of_time.mp3");
    var outOfTime = document.getElementById("oot");
    outo.volume = .4;

    outOfTime.onclick = function () {
        if(outo.paused) {
            outo.play()
        } else {
            outo.pause();
            outo.currentTime = 0;
        }
    }