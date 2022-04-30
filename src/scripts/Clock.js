import { addNewPokemon } from './ApiRequests'
import { setCookies, pokemonIdArray } from './Cookies';

var clockLock = false;
var pokemonId = null;

var clockMode = "hunting";

var clockMinutes = 25, clockSeconds = 0, configPomodoroMinutes = 25, configBreakMinutes = 5;

//this is the JS interval function that every second decreases the seconds values.
var clockInterval;

function clock(){
    // Two holders to print the minutes and seconds with two digits in a "00:00" format.
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

            //change the screen to the center pokemon gif
            document.getElementById("healing").style.display = "initial";
            document.getElementById("hunting").style.display = "none";
            
            pokemonId = randomId();
            setCookies(pokemonId);
            addNewPokemon(pokemonId);
        }
        else{
            clockMode ="hunting";

            document.getElementById("timer").innerHTML = configPomodoroMinutes +":00";   

            //change the screen to the hunting gif     
            document.getElementById("hunting").style.display = "initial";
            document.getElementById("healing").style.display = "none";
        }
    }
}

export function startClock(){
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

export function resetClock(){
    clockLock = false;
    clearInterval(clockInterval);

    if(clockMode == "hunting"){
        document.getElementById("timer").innerHTML = configPomodoroMinutes + ":00";
    }
    else{
        document.getElementById("timer").innerHTML = configBreakMinutes +":00"; 
    }
}

export function configClock(){
    if(clockLock == false){
        
        configPomodoroMinutes = document.getElementById("time-pomodoro").value;
        configBreakMinutes = document.getElementById("time-break").value;

        if(configPomodoroMinutes > 60){configPomodoroMinutes = 60}
        if(configBreakMinutes > 60){configBreakMinutes = 60}

        if(clockMode == "hunting"){
            document.getElementById("timer").innerHTML = configPomodoroMinutes + ":00";
        }
        else{
            document.getElementById("timer").innerHTML = configBreakMinutes +":00"; 
        }
    }
}

function playAlert(){
    document.getElementById(`${clockMode}-alert`).play();
}

/*Genereates a random number between 1 and 151 to generate a new Pokemon*/
function randomId(){
    var x = 0;
    while(x == 0){
        x = Math.floor(Math.random() * 152);
        if(pokemonIdArray.includes(x)){x = 0;}
    }
    return x;
}
