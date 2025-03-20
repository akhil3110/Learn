let canvas = document.getElementById("canvas")

let context = canvas.getContext("2d")

var vertical_hieght = window.innerHeight;
var window_width = window.innerWidth;

canvas.style.background= "red"
canvas.style.width = window_width + "px";
canvas.style.height = vertical_hieght + "px";

// context.fillRect(0,0,20,100);

// context.beginPath();
// context.moveTo(50,50);
// context.lineTo(100,100);
// context.stroke();

context.beginPath();
context.arc(30,40,20,0,Math.PI,false);
context.stroke();