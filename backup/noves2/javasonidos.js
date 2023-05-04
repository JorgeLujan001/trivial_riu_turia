window.addEventListener("load",function(){
	document.getElementById("play").addEventListener("click",sonarPajaros);
	document.getElementById("stop").addEventListener("click",callarPajaros);			
});

function sonarPajaros(){
	var sonido = document.createElement("iframe");
	sonido.setAttribute("src","sonidos/pajaritos.mp3");
	document.body.appendChild(sonido);
	
}

function callarPajaros(){
	var iframe = document.getElementsByTagName("iframe");

	if (iframe.length > 0){
		iframe[0].parentNode.removeChild(iframe[0]);
		document.getElementById("play").addEventListener("click",sonarPajaros);
	}
}
