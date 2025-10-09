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