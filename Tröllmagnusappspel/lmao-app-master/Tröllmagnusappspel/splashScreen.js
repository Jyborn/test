function splashScreen() {

	textAlign(CENTER)
	background(0)
	fill(255)
	textSize(sWidth*0.2)
	text("M", sWidth*0.35, sHeight/7);
	text("M", sWidth*0.65, sHeight/7);
	textSize(sWidth *0.15)
	text("&", sWidth*0.305 + sWidth*0.195, sHeight/7);
	fill(255);
	rect(sWidth*0.25, sHeight/7, sWidth*0.5, sHeight*0.005);
	textSize(sWidth*0.05)
	text("Press anywhere to continue", sWidth*0.5, sHeight/1.1)
	
}

function splashScreenPressed() {
	gamestate = "load-menu"
}