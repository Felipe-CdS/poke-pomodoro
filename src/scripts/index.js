import { addNewPokemon } from './ApiRequests'

var clockInterval;

var clockLock = false;

var clockMode = "hunting";

var clockMinutes = 25;
var clockSeconds = 0;

var configPomodoroMinutes = 25;
var configBreakMinutes = 5;

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
        playAlert();

        if(clockMode == "hunting"){
            clockMode ="healing";
            document.getElementById("timer").innerHTML = configBreakMinutes + ":00";
            document.getElementById("healing").style.display = "initial";
            document.getElementById("hunting").style.display = "none";
            
            addNewPokemon(Math.floor(Math.random() *152));
        }
        else{
            clockMode ="hunting";
            document.getElementById("timer").innerHTML = configPomodoroMinutes +":00";            
            document.getElementById("hunting").style.display = "initial";
            document.getElementById("healing").style.display = "none";
        }
    }
}

function startClock(){
    if(!clockLock){
        if(clockMode == "hunting"){
            clockMinutes = configPomodoroMinutes;
            clockSeconds = 0;
            clockLock = true;
            clockInterval = setInterval(clock, 1000);
        }
        else{
            clockMinutes = configBreakMinutes;
            clockSeconds = 0;
            clockLock = true;
            clockInterval = setInterval(clock, 1000);
        } 
    } 
}

function pauseClock(){
    clockLock = false;
    clearInterval(clockInterval);

    if(clockMode == "hunting"){
        document.getElementById("timer").innerHTML = configPomodoroMinutes + ":00";
    }
    else{
        document.getElementById("timer").innerHTML = configBreakMinutes +":00"; 
    }
}

function playAlert(){
    if(clockMode == "hunting"){
        document.getElementById('healing-alert').play();
    }
    else{
        document.getElementById('hunting-alert').play();  
    }
}


function configClock(){
    if(clockLock == false){
        if(configPomodoroMinutes < 60){configPomodoroMinutes = 60}
        if(configBreakMinutes < 60){configBreakMinutes = 60}

        configPomodoroMinutes = document.getElementById("time-pomodoro").value;
        configBreakMinutes = document.getElementById("time-break").value;

        if(clockMode == "hunting"){
            document.getElementById("timer").innerHTML = configPomodoroMinutes + ":00";
        }
        else{
            document.getElementById("timer").innerHTML = configBreakMinutes +":00"; 
        }
    }
}

document.getElementById("start-button").addEventListener("click", startClock);
document.getElementById("stop-button").addEventListener("click", pauseClock);

document.getElementById("config-clock-button").addEventListener("click", configClock);
document.getElementById("time-pomodoro").addEventListener("change", configClock);
document.getElementById("time-break").addEventListener("change", configClock);


/*Default Values:*/
document.getElementById("healing").style.display = "none";
document.getElementById("time-pomodoro").value = 25;
document.getElementById("time-break").value = 5;
document.getElementById("hunting-alert").volume = 0.5;
document.getElementById("healing-alert").volume = 0.5;