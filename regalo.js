window.requestAnimFrame = function () {
   return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback) { window.setTimeout(callback, 1000 / 60); };
}();

var canvas = document.getElementById('canvas'),
   ctx = canvas.getContext('2d'),
   cw = window.innerWidth,
   ch = window.innerHeight,
   fireworks = [],
   particles = [],
   hue = 120,
   limiterTotal = 5,
   limiterTick = 0,
   timerTotal = 80,
   timerTick = 0,
   mousedown = false,
   mx, my;

canvas.width = cw;
canvas.height = ch;

function random(min, max) { return Math.random() * (max - min) + min; }

function calculateDistance(p1x, p1y, p2x, p2y) {
   var xDistance = p1x - p2x,
      yDistance = p1y - p2y;
   return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

/* --- FIREWORK OBJETO --- */
function Firework(sx, sy, tx, ty) { /* ... igual ... */ }
Firework.prototype.update = function (index) { /* ... */ };
Firework.prototype.draw = function () { /* ... */ };

function Particle(x, y) { /* ... */ }
Particle.prototype.update = function (index) { /* ... */ };
Particle.prototype.draw = function () { /* ... */ };

function createParticles(x, y) { /* ... */ }

function loop() { /* ... animación ... */ }

window.onload = function () {
   var merrywrap = document.getElementById("merrywrap");
   var box = merrywrap.getElementsByClassName("giftbox")[0];
   var step = 1;
   var stepMinutes = [2000, 2000, 1000, 1000];

   function init() { box.addEventListener("click", openBox, false); }

   function stepClass(step) {
      merrywrap.className = 'merrywrap step-' + step;
   }

   function openBox() {
      if (step === 1) box.removeEventListener("click", openBox, false);

      stepClass(step);

      if (step === 4) {
         reveal();
         return;
      }

      setTimeout(openBox, stepMinutes[step - 1]);
      step++;
   }

   init();
};

function reveal() {
   document.querySelector('.merrywrap').style.backgroundColor = 'transparent';
   loop();

   document.getElementById('billboard').style.opacity = 1;

   var btn = document.createElement("button");
   btn.setAttribute("id", "continueButton");
   btn.innerHTML = "¿Quieres más? ❤️";
   btn.onclick = function () { window.location.href = "corazon.html"; };

   document.querySelector('#video').appendChild(btn);
}
