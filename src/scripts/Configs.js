export function toggleConfigs(){
	var configsMenuState = document.getElementById("configs-div").style.display;
	document.getElementById("config-button").classList.toggle("active");

	if(configsMenuState == "none"){
		document.getElementById("timer-div").style.display = "none";  
    	document.getElementById("configs-div").style.display = "flex";
		document.getElementById('start-button').disabled = true;
		document.getElementById('stop-button').disabled = true;
	}
	else{
		document.getElementById("timer-div").style.display = "flex";
    	document.getElementById("configs-div").style.display = "none";
		document.getElementById('start-button').disabled = false;
		document.getElementById('stop-button').disabled = false;
	}		
}