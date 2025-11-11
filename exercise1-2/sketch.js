<<<<<<< HEAD
function setup(){
    createCanvas(600,600);
    background(0);
}

function draw(){

}    

function drawTriangle(){
    background(0);
    fill(random(255), random(255), random(255));
     triangle(mouseX, mouseY, random(300),random(300),random(300),random(300));
}

function mouseClicked(){
    drawTriangle();
}    
=======
let x;
let y;
function setup(){
    createCanvas(600, 600);
    noStroke();
    let x= random(100, 500);
    let y= random(100,500);
    
    fillColor= color(random(255), random(255), random(255));
}

function draw(){
    background (255);
    drawTriangle();
}


function mouseClicked(){
    drawTriangle();
}

function drawTriangle(){
fillColor= color(random(255), random(255), random(255));
triangle(mouseX, mouseY, x, y, x, y);
}
>>>>>>> 21980d1d3263a4ef71abde4d8c6df288f50d1731
