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