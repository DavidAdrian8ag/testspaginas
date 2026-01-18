// ==========================================
// Generador de Runas SOLO para Pantalla Final
// ==========================================
const celebrationContainer = document.getElementById('celebrationRunes');
const runeChars = "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟᛠᛡᛢᛣᛤᛥᛦᛧᛨᛩᛪ᛫᛬᛭";
const numberOfRunes = 150;

for (let i = 0; i < numberOfRunes; i++) {
   const runeSpan = document.createElement('span');
   runeSpan.classList.add('dynamic-rune');
   runeSpan.innerText = runeChars.charAt(Math.floor(Math.random() * runeChars.length));

   runeSpan.style.left = Math.random() * 100 + '%';
   runeSpan.style.top = Math.random() * 100 + '%';

   const size = (Math.random() * 3 + 0.5) + 'em';
   runeSpan.style.fontSize = size;

   const duration = (Math.random() * 6 + 3) + 's';
   const delay = -(Math.random() * 10) + 's';

   runeSpan.style.animationDuration = duration;
   runeSpan.style.animationDelay = delay;

   celebrationContainer.appendChild(runeSpan);
}

// --- JS ORIGINAL DEL JUEGO ---
const innerDial = document.querySelector(".innerdial");

for (let i = 0; i < 16; i++) {
   const mark = document.createElement("div");
   mark.classList.add("mark");
   mark.style.transform = `rotate(${i * 22.5}deg) translateX(100px)`;
   innerDial.appendChild(mark);
}

innerDial.innerHTML += '<div class="center"><div class="start"></div></div>';

const combination = [7, 84, 20, 11, 15];
const pageHeight = window.innerHeight;

let pos = 0, pSafePost = 0, cracked = false, win = false, timer;

const root = document.documentElement;
const posInput = document.getElementById("posInput");
const chalkboard = document.querySelector(".chalkboard");
const boxFlash = document.querySelector(".box-flash");
const celebration = document.getElementById("celebration");

function handleValue(safePos) {
   if (timer) clearTimeout(timer);

   timer = setTimeout(() => {
      boxFlash.classList.remove("click", "near", "off");
      posInput.classList.remove("correct");

      if (safePos && combination[pos] === safePos) {
         void boxFlash.offsetWidth;
         boxFlash.classList.add("click");
         posInput.classList.add("correct");
         chalkboard.innerText += safePos + "\n";

         if (++pos === combination.length) cracked = true;

      } else if (safePos && Math.abs(combination[pos] - safePos) < 3) {
         void boxFlash.offsetWidth;
         boxFlash.classList.add("near");
      } else {
         void boxFlash.offsetWidth;
         boxFlash.classList.add("off");
      }

      pSafePost = safePos;
   }, 100);

   if (cracked && !win) {
      win = true;
      setTimeout(() => {
         celebration.style.display = "flex";
      }, 300);
   }
}

window.addEventListener("scroll", () => {
   root.style.setProperty("--scroll", window.scrollY);

   const safePos = Math.floor(window.scrollY / (10000 - pageHeight) * 100);
   posInput.value = safePos;

   handleValue(safePos);
});

posInput.addEventListener("input", () => {
   const safePos = parseInt(posInput.value);
   if (!isNaN(safePos)) handleValue(safePos);
});

document.getElementById("continueBtn").addEventListener("click", () => {
   window.location.href = "papeles.html";
});