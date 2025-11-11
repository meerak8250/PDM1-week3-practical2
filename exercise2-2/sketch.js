function setup(){
    createCanvas(600, 600);
}

function draw(){
background(0);
fill(250,202,160,100);
circle(mouseX, mirrorCoordinate(mouseY), 50);
fill(255, 255, 0, 100);
circle(mouseX, mouseY, 50);
fill(255, 0, 255, 100);
circle(mirrorCoordinate(mouseX),mirrorCoordinate(mouseY),50);
fill(0, 255, 255, 100);
circle(mirrorCoordinate(mouseX), mouseY, 50);

}    

function mirrorCoordinate(coordinate){
    const newCoordinate= width- coordinate;
    return newCoordinate;
}