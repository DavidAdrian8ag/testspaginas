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
    const body = document.body;
    const position = document.querySelector(".position");
    const chalkboard = document.querySelector(".chalkboard");
    const boxFlash = document.querySelector(".box-flash");
    const celebration = document.getElementById("celebration");

    function createConfetti() {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.setProperty("--hue", Math.random() * 360);
      confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
      celebration.appendChild(confetti);
      setTimeout(() => confetti.remove(), 5000);
    }

    function startInfiniteConfetti() {
      setInterval(() => {
        for (let i = 0; i < 8; i++) createConfetti();
      }, 300);
    }

    window.addEventListener("scroll", () => {
      root.style.setProperty("--scroll", window.scrollY);
      const safePos = Math.floor(window.scrollY / (10000 - pageHeight) * 100);
      position.innerText = safePos;

      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        if (safePos === pSafePost) return;
        boxFlash.classList.remove("click", "near", "off");
        if (safePos && combination[pos] === safePos) {
          void boxFlash.offsetWidth;
          boxFlash.classList.add("click");
          chalkboard.innerText = chalkboard.innerText + safePos + "\n";
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
          startInfiniteConfetti();
        }, 800);
      }
    });