import { addNewPokemon } from './ApiRequests'

var clockInterval;

var clockLock = false;

var clockMode = "hunting";

var clockMinutes = 1;
var clockSeconds = 0;



function clock(){
    var minutesHolder, secondsHolder;

    clockSeconds--;

    if(clockSeconds < 0){
        clockSeconds = 59;
        clockMinutes--;
    }

    if(clockSeconds < 10){
        secondsHolder = "";
        secondsHolder = "0" + clockSeconds;
    }
    else{ secondsHolder = clockSeconds; }

    if(clockMinutes < 10) {
        minutesHolder = "";
        minutesHolder = "0" + clockMinutes;
    }
    else{ minutesHolder = clockMinutes; }

    document.getElementById("timer").innerHTML = minutesHolder + ":" + secondsHolder;
    
    if(clockMinutes < 0){
        clockLock = false;
        clearInterval(clockInterval);

        if(clockMode == "hunting"){
            clockMode ="healing";
            document.getElementById("timer").innerHTML ="5:00";
            document.getElementById("healing").style.display = "initial";
            document.getElementById("hunting").style.display = "none";
        }
        else{
            clockMode ="hunting";
            document.getElementById("timer").innerHTML ="25:00";
            
            document.getElementById("hunting").style.display = "initial";
            document.getElementById("healing").style.display = "none";
        }

        addNewPokemon(Math.floor(Math.random() *152));
    }
}

function startClock(){
    if(!clockLock){
        if(clockMode == "hunting"){
            clockMinutes = 25;
            clockSeconds = 0;
            clockLock = true;
            clockInterval = setInterval(clock, 1000);
        }
        else{
            clockMinutes = 5;
            clockSeconds = 0;
            clockLock = true;
            clockInterval = setInterval(clock, 1000);
        }
        
    } 
}

document.getElementById("start-button").addEventListener("click", startClock);
document.getElementById("healing").style.display = "none";