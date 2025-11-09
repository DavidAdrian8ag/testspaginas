let highestZ = 1;

class Paper {
  holdingPaper = false;
  pointerStartX = 0;
  pointerStartY = 0;
  pointerX = 0;
  pointerY = 0;
  prevPointerX = 0;
  prevPointerY = 0;
  velX = 0;
  velY = 0;
  rotation = Math.random() * 30 - 15;
  currentPaperX = 0;
  currentPaperY = 0;
  rotating = false;

  init(paper) {
    // Manejar movimiento
    document.addEventListener('pointermove', (e) => {
      if (!this.rotating) {
        this.pointerX = e.clientX;
        this.pointerY = e.clientY;
        this.velX = this.pointerX - this.prevPointerX;
        this.velY = this.pointerY - this.prevPointerY;
      }

      const dirX = e.clientX - this.pointerStartX;
      const dirY = e.clientY - this.pointerStartY;
      const dirLength = Math.sqrt(dirX * dirX + dirY * dirY);
      const dirNormalizedX = dirX / dirLength;
      const dirNormalizedY = dirY / dirLength;
      const angle = Math.atan2(dirNormalizedY, dirNormalizedX);
      let degrees = (360 + Math.round((180 * angle) / Math.PI)) % 360;

      if (this.rotating) {
        this.rotation = degrees;
      }

      if (this.holdingPaper) {
        if (!this.rotating) {
          this.currentPaperX += this.velX;
          this.currentPaperY += this.velY;
        }
        this.prevPointerX = this.pointerX;
        this.prevPointerY = this.pointerY;

        paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
      }
    });

    // Cuando el usuario toca o hace clic
    paper.addEventListener('pointerdown', (e) => {
      e.preventDefault(); // Evita scroll en móviles mientras se arrastra
      if (this.holdingPaper) return;

      this.holdingPaper = true;
      paper.style.zIndex = highestZ++;
      this.pointerStartX = e.clientX;
      this.pointerStartY = e.clientY;
      this.prevPointerX = e.clientX;
      this.prevPointerY = e.clientY;

      // Botón derecho en mouse, o segundo dedo en touch → rotar
      if (e.pointerType === 'mouse' && e.button === 2) {
        this.rotating = true;
      }
    });

    // Cuando el usuario suelta el dedo o mouse
    window.addEventListener('pointerup', () => {
      this.holdingPaper = false;
      this.rotating = false;
    });
  }
}

const papers = Array.from(document.querySelectorAll('.paper'));
papers.forEach((paper) => {
  const p = new Paper();
  p.init(paper);
});

// Evitar menú contextual con botón derecho
window.addEventListener('contextmenu', (e) => e.preventDefault());

