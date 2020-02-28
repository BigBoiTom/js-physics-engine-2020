const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht





let circles = [];
for (let i=100; i<300;i++){
  let myPoint = new Point(getRandomInt(0, width),getRandomInt(0, height),20, "blue");
  myPoint.draw(context);
 
}