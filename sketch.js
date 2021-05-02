// Tamanho inicial da caneta
var sizeD = 5;
// Cores iniciais da caneta
var r = 255;
var g = 255;
var b = 255;

// ultimos valores da caneta
var lastX;
var lastY;

// dados do scanner
let scanner = false;
let auxPixels = []
let scanningOffset = 20;

let osc = []

let last = [false, false, false, false, false, false, false]

let img;


var notas = [ 60, 62, 64, 65, 67, 69, 71];
function setup() {
	
	createCanvas(windowWidth, windowHeight);
	background(255);
	fill(255);
	rect(20,0,windowWidth-40,windowHeight);
	fill(255);
	stroke(0);
	rect(0, 0, 20, 20);

	for(let i = 0; i < 7; i ++){
		osc[i] = new p5.TriOsc();
		osc[i].start();
		osc[i].amp(0);
	}
	saveCanvas =  createGraphics(windowWidth, windowHeight);

	input = createFileInput(handleFile);
	input.position(windowWidth-20, 260, 20, 20);
}

function draw() {
	//Molduras       
    noFill()
    rect(20,0,windowWidth-40,windowHeight);
    fill(255)
    rect(0, 0, 20, 20);
    rect(windowWidth-20, 240, windowWidth, windowHeight)
	noStroke();
    rect(0, 21, 20, windowHeight)
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
	fill(255);
	rect(windowWidth-20, 140, 20, 20);
	//Clear
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
	//Play
	strokeWeight(1);
	stroke(0);
	fill(255);
	rect(windowWidth-20, 220, 19, 19);
	line(windowWidth-17, 225, windowWidth-3, 230);
	line(windowWidth-17, 235, windowWidth-3, 230);
	line(windowWidth-17, 235, windowWidth-17, 225);
	//DOWNLOAD
	strokeWeight(1);
	stroke(0);
	fill(255);
	rect(windowWidth-20, 240, 19, 19);
	line(windowWidth-10, 245, windowWidth-10, 257);
	line(windowWidth-15, 250, windowWidth-10, 257);
	line(windowWidth-5, 250, windowWidth-10, 257);
	//UPLOAD
	// strokeWeight(1);
	// stroke(0);
	// fill(255);
	// rect(windowWidth-20, 260, 19, 19);
	// line(windowWidth-10, 265, windowWidth-10, 277);
	// line(windowWidth-15, 270, windowWidth-10, 265);
	// line(windowWidth-5, 270, windowWidth-10, 265);
	//OPCA
	strokeWeight(1);
	stroke(0);
	fill(255);
	rect(windowWidth-20, 280, 19, 19);
	ellipse(windowWidth-10, 290, 3)
	//OPCB
	strokeWeight(1);
	stroke(0);
	fill(255);
	rect(windowWidth-20, 300, 19, 19);
	ellipse(windowWidth-10, 310, 8)
	//OPCC
	strokeWeight(1);
	stroke(0);
	fill(255);
	rect(windowWidth-20, 320, 19, 19);
	ellipse(windowWidth-10, 330, 13)
	//Scanner
	if(img){
		image(img,20,0,windowWidth-40,windowHeight);
		img = false;
	}
	if(scanner){
		fill(255, 0 ,0, 40)
		noStroke()
		rect(scanningOffset, 0, 1, windowHeight)
		scanningOffset += 1 
		if(scanningOffset+2 >= windowWidth - 25){
			scanner = false;
			pixels = auxPixels
			updatePixels()
			auxPixels = []
			scanningOffset = 20;
			for(let i =0; i < 7; i++){
				osc[i].fade(0,0.2);
			}
		}else{
			ColorsInLine(scanningOffset+2)
		}
	//Desenho
	}else{
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
		ellipse(10, 10, sizeD, sizeD);
		lastX = mouseX;
		lastY = mouseY;
	}
}

function mouseClicked(){
	getAudioContext().resume();
	// RED
	if(mouseX >= windowWidth-20 & mouseY<= 20 & !scanner){
			r = 255;
			g = 0;
			b = 0;
	//ORANGE
	}else if(mouseX >= windowWidth-20 & mouseY<=40 & !scanner){
		r = 255;
		g = 127;
		b = 0;
	//YELLOW
	}else if(mouseX >= windowWidth-20 & mouseY<=60 & !scanner){
		r = 255;
		g = 255;
		b = 0;
	//GREEN
	}else if(mouseX >= windowWidth-20 & mouseY<=80 & !scanner){
		r = 0;
		g = 255;
		b = 0;
	//BLUE
	}else if(mouseX >= windowWidth-20 & mouseY<=100 & !scanner){
		r = 0;
		g = 0;
		b = 255;
	//PURPLE
	}else if(mouseX >= windowWidth-20 & mouseY<=120 & !scanner){
		r = 148;
		g = 0;
		b = 211;
	//DARKPURPLE
	}else if(mouseX >= windowWidth-20 & mouseY<=140 & !scanner){
		r = 75;
		g = 0;
		b = 130;
	//WHITE (borracha)
	}else if(mouseX >= windowWidth-20 & mouseY<=160 & !scanner){
		r = 255;
		g = 255;
		b = 255;
	//CLEAR
	}else if(mouseX >= windowWidth-20 & mouseY<=180 & !scanner){
		background(255);
		fill(255);
		strokeWeight(1);
		stroke(0);
		rect(20,0,windowWidth-40,windowHeight);
		fill(255);
		stroke(0);
		rect(0, 0, 20, 20);
	//LAPIS MAIOR
	}else if(mouseX >= windowWidth-20 & mouseY<=200 & !scanner){
		sizeD ++;
		sizeD = min(sizeD,20);
	//LAPIS MENOR
	}else if(mouseX >= windowWidth-20 & mouseY<=220 & !scanner){
		sizeD--
		sizeD = max(sizeD, 1);
    //SCANNER
	}else if(mouseX >= windowWidth-20 & mouseY<=240 & !scanner){
		scanner = true;
		loadPixels();
		auxPixels = pixels;
	// Download
	}else if(mouseX >= windowWidth-20 & mouseY<=260 & !scanner){
		let c = get(20,0,windowWidth-40,windowHeight);
    	saveCanvas.image(c, 0, 0);
    	save(saveCanvas, "artworkwithmusic.png");
    // //Upload
	// }else if(mouseX >= windowWidth-20 & mouseY<=280 & !scanner){
	// 	console.log("upload")
	//OPCA
	}else if(mouseX >= windowWidth-20 & mouseY<=300 & !scanner){
		notas = [ 48, 50, 52, 53, 55, 57, 59];
		console.log("a")
	//OPCB
	}else if(mouseX >= windowWidth-20 & mouseY<=320 & !scanner){
		notas = [ 60, 62, 64, 65, 67, 69, 71];
		console.log("b")
	// OPCC
	}else if(mouseX >= windowWidth-20 & mouseY<=340 & !scanner){
		notas = [ 72, 74, 76, 77, 79, 81, 83];
		console.log("c")
	}
}


function ColorsInLine(x){
	let colors = {
		//C
		red: false,
		//D
		orange: false, 
		//E
		yellow: false,
		//F
		green: false,
		//G 
		blue: false,
		//A 
		purple: false,
		//B
		darkpurple: false
	}
	for(let i = x * 4; i < windowWidth * windowHeight * 4; i = i + (windowWidth * 4)){
		let color = [auxPixels[i], auxPixels[i+1], auxPixels[i+2], auxPixels[i+3]]
		if(color[0] == 255 & color[1] == 0 & color[2] == 0){
			colors.red = true;
		} else if(color[0] == 255 & color[1] == 127 & color[2] == 0){
			colors.orange = true;
		} else if(color[0] == 255 & color[1] == 255 & color[2] == 0){
			colors.yellow = true;
		} else if(color[0] == 0 & color[1] == 255 & color[2] == 0){
			colors.green = true;
		} else if(color[0] == 0 & color[1] == 0 & color[2] == 255){
			colors.blue = true;
		} else if(color[0] == 148 & color[1] == 0 & color[2] == 211){
			colors.purple = true;
		} else if(color[0] == 75 & color[1] == 0 & color[2] == 130){
			colors.darkpurple = true;
		} 
	}
	let notes = []
	// The midi notes of a scale
	let notesb = [false, false, false, false, false, false, false]
	if(colors.red){
		notes.push(60)
		notesb[0] = true
	}
	if(colors.orange){
		notes.push(62)
		notesb[1] = true
	}
	if(colors.yellow){
		notes.push(64)
		notesb[2] = true
	}
	if(colors.green){
		notes.push(65)
		notesb[3] = true
	}
	if(colors.blue){
		notes.push(67)
		notesb[4] = true
	}
	if(colors.purple){
		notes.push(69)
		notesb[5] = true
	}
	if(colors.darkpurple){
		notes.push(71)
		notesb[6] = true
	}

	playTones(notes, notesb)
}

function playTones(notes, notesb){
	for(let i = 0; i < 7; i++){
		if(notesb[i]){
			if(!last[i]){
				osc[i].freq(midiToFreq(notas[i]));
				osc[i].fade(0.5,0.2);
			}
		}else{
			if(last[i]){
				osc[i].fade(0,0.2);
			}
		}
	}
	last = notesb
}

function handleFile(file) {
	print(file);
	if (file.type === 'image') {
	  img = createImg(file.data, '');
	  img.hide();
	} else {
	  img = null;
	}
  }