export function toggleConfigs(){
	var configsMenuState = document.getElementById("configs-div").style.display;
	document.getElementById("config-button").classList.toggle("active");

	if(configsMenuState == "none"){
		document.getElementById("timer-div").style.display = "none";  
    	document.getElementById("configs-div").style.display = "flex";
	}
	else{
		document.getElementById("timer-div").style.display = "flex";
    	document.getElementById("configs-div").style.display = "none";
	}		
}