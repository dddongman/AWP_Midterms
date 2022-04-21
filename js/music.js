var oOT = new Audio("./assets/out_of_time.mp3");
var outOf = document.getElementById("btnPlay");
    oOT.volume = .4;
    oOT.loop = true;

    outOf.onclick = function () {
        if(oOT.paused) {
            oOT.play();
        } else {
            oOT.pause(); 
        }
    }
