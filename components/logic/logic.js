var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var x = 300;
var y = 350;
let count = 0;

context.arc(x, y, 50, 0, 2 * Math.PI);
context.fillStyle = "red";
context.fill();

function draw() {
  // var timePassed = (Date.now() - t) / 1000;
  // t = Date.now();

  context.clearRect(0, 0, 600, 400);

  context.beginPath();
  context.arc(x, y, 50, 0, 2 * Math.PI);
  context.fillStyle = "red";
  context.fill();

  context.font = "25px Arial";
  context.fillStyle = "white";
  context.fillText("Count: " + count, 20, 30);

  window.requestAnimationFrame(draw);
}

window.onload = function () {
  let btn = document.getElementById("jump");

  btn.onclick = function () {
    count += 1;
    y -= 25;
    draw();
  };
  document.onkeydown = function () {
    count += 1;
    y -= 25;
    draw();
  };
  document.ontouchstart = function () {
    count += 1;
    y -= 25;
    draw();
  };
};
