let star1X, star1Y, star2X, star2Y, star3X, star3Y;

function setup() {
    createCanvas(400, 300);
    
    star1X = random(width);
    star1Y = random(height);
    star2X = random(width);
    star2Y = random(height);
    star3X = random(width);
    star3Y = random(height);
    noStroke();
<<<<<<< HEAD
    star1X = random(width);
    star1Y = random(height);
    star2X = random(width);
    star2Y = random(height);
    star3X = random(width);
    star3Y = random(height);
=======

>>>>>>> 21980d1d3263a4ef71abde4d8c6df288f50d1731
}

function draw() {
    background(0, 0, 50);
<<<<<<< HEAD
    fill(255, 234, 0);
    star(star1X, star1Y);
    star(star2X, star2Y);
    star(star3X, star3Y);
}

/**
 * draws the star at the given coordinates (random)
 * @param {number} x the x coordinate of the star
 * @param {number} y the y coordinate of the star
 */

function star(x, y){
    triangle(x, y - 50, x - 20, y, x + 20, y);
    triangle(x - 50, y - 20, x, y - 20, x, y + 10);
    triangle(x + 50, y - 20, x, y - 20, x, y + 10);
    triangle(x - 20, y - 5, x, y + 10, x - 35, y + 30);
    triangle(x, y + 10, x + 20, y - 5, x + 35, y + 30);
}
//triange(x1,y1,x2,y2,x3,y3)
=======
    
    star(star1X,star1Y);
    star(star2X,star2Y);
    star(star3X,star3Y);
}

function star(x, y) {
   fill(255, 234, 0);
   triangle(x, y - 50, x - 20, y, x + 20, y);
   triangle(x - 50, y - 20, x , y - 20, x, y + 10);
   triangle(x + 50, y - 20, x , y - 20, x, y + 10);
   triangle(x - 20, y - 5, x, y + 10, x - 35, y + 30);
   triangle(x, y + 10, x + 20, y - 5, x + 35, y + 30);
    
}
>>>>>>> 21980d1d3263a4ef71abde4d8c6df288f50d1731
