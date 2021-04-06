
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	fill(255);
	rect(20,0,windowWidth-40,windowHeight);
	fill(255);
	stroke(0);
	rect(0, 0, 20, 20);
}
var sizeD = 5;
var r = 0;
var g = 0;
var b = 0;
var lastX;
var lastY;
function draw() {
	noStroke();
	//RED
	fill(255,0,0);
	rect(windowWidth-20, 0, 20, 20);
	//ORANGE
	fill(255,127,0);
	rect(windowWidth-20, 20, 20, 20);
	//YELLOW
	fill(255,255,0);
	rect(windowWidth-20, 40, 20, 20);
	//GREEN
	fill(0,255,0);
	rect(windowWidth-20, 60, 20, 20);
	//BLUE
	fill(0,0,255);
	rect(windowWidth-20, 80, 20, 20);
	//PURPLE
	fill(148,0,211);
	rect(windowWidth-20, 100, 20, 20);
	//PDARKPURPLE
	fill(75,0,130);
	rect(windowWidth-20, 120, 20, 20);
	//BLACK
	fill(0);
	rect(windowWidth-20, 140, 20, 20);
	//WHITE
	strokeWeight(1);
	stroke(255, 0, 0);
	fill(255);
	rect(windowWidth-20, 160, 19, 19);
	line(windowWidth-20, 160,windowWidth,180);
	//Mais
	strokeWeight(1);
	stroke(0);
	fill(255);
	rect(windowWidth-20, 180, 19, 19);
	line(windowWidth-10, 183,windowWidth-10, 197);
	line(windowWidth-17, 190, windowWidth-3, 190);
	//Menos
	strokeWeight(1);
	stroke(0);
	fill(255);
	rect(windowWidth-20, 200, 19, 19);
	line(windowWidth-17, 210, windowWidth-3, 210);
	if(mouseIsPressed & mouseX>20 & mouseX<windowWidth-20 & mouseY< windowHeight & mouseY>0){
		stroke(r,g,b);
		strokeWeight(sizeD);
		fill(r,g,b);
		line(mouseX, mouseY, lastX, lastY);
	fill(r,g,b);
	noStroke();
	ellipse(mouseX, mouseY, sizeD, sizeD);
	
	}
	stroke(0);
	strokeWeight(1)
	fill(r,g,b);
	noStroke();
	ellipse(10, 10, sizeD, sizeD);
	lastX = mouseX;
	lastY = mouseY;
}

function mouseClicked(){
	//RED
if(mouseX >= windowWidth-20 & mouseY<= 20){
		r = 255;
		g = 0;
		b = 0;
		//ORANGE
}else if(mouseX >= windowWidth-20 & mouseY<=40){
	r = 255;
	g = 127;
	b = 0;
	//YELLOW
}else if(mouseX >= windowWidth-20 & mouseY<=60){
	r = 255;
	g = 255;
	b = 0;
	//GREEN
}else if(mouseX >= windowWidth-20 & mouseY<=80){
	r = 0;
	g = 255;
	b = 0;
	//BLUE
}else if(mouseX >= windowWidth-20 & mouseY<=100){
	r = 0;
	g = 0;
	b = 255;
	//PURPLE
}else if(mouseX >= windowWidth-20 & mouseY<=120){
	r = 148;
	g = 0;
	b = 211;
	//DARKPURPLE
}else if(mouseX >= windowWidth-20 & mouseY<=140){
	r = 75;
	g = 0;
	b = 130;
	//BLACK
}else if(mouseX >= windowWidth-20 & mouseY<=160){
	r = 0;
	g = 0;
	b = 0;
}else if(mouseX >= windowWidth-20 & mouseY<=180){
	background(255);
	fill(255);
	strokeWeight(1);
	stroke(0);
	rect(20,0,windowWidth-40,windowHeight);
	fill(255);
	stroke(0);
	rect(0, 0, 20, 20);
}else if(mouseX >= windowWidth-20 & mouseY<=200){
	sizeD ++;
	sizeD = min(sizeD,20);
}else if(mouseX >= windowWidth-20 & mouseY<=220){
	fill(255);
	stroke(0);
	rect(0, 0, 20, 20);
	sizeD--
	sizeD = max(sizeD, 1);
}
}