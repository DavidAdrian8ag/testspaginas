const text = "¿Quieres jugar\nun juego?";
const title = document.getElementById("title");

title.innerHTML = "";

text.split("").forEach((char) => {

   if (char === "\n") {
      title.appendChild(document.createElement("br"));
   }
   else if (char === " ") {
      const space = document.createElement("span");
      space.innerHTML = "&nbsp;";
      title.appendChild(space);
   }
   else {
      const span = document.createElement("span");
      span.textContent = char;
      span.classList.add("letter");
      span.style.setProperty("--delay", Math.random() * 2 + "s");
      title.appendChild(span);
   }

});

document.getElementById("playBtn").addEventListener("click", () => {
   window.location.href = "./safe.html";
});