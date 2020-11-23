import { startClock, resetClock, configClock} from './Clock'
import { startCookieSave } from './Cookies'

function openFaq(){
    document.getElementById("faq-box-bg").style.display = "initial";
    document.getElementById("faq-box").style.display = "flex";
}

function closeFaq(){
    document.getElementById("faq-box-bg").style.display = "none";
    document.getElementById("faq-box").style.display = "none";
}

/* Buttons Functions: */
document.getElementById("start-button").addEventListener("click", startClock);
document.getElementById("stop-button").addEventListener("click", resetClock);

document.getElementById("config-clock-button").addEventListener("click", configClock);
document.getElementById("time-pomodoro").addEventListener("change", configClock);
document.getElementById("time-break").addEventListener("change", configClock);

document.getElementById("open-faq-button").addEventListener("click", openFaq);
document.getElementById("close-faq-button").addEventListener("click", closeFaq);


/* Default Values: */
document.getElementById("healing").style.display = "none";
document.getElementById("time-pomodoro").value = 25;
document.getElementById("time-break").value = 5;
document.getElementById("hunting-alert").volume = 0.4;
document.getElementById("healing-alert").volume = 0.4;
startCookieSave();