$(document).ready(function () {
   let spins = 0;
   const sections = ["Dinero", "Cena", "Besos", "Viaje", "Sorpresa", "Playa"];

   $('.spin-button').on('click', function () {
      $('#winnerBox').hide();
      spins++;

      const rand = Math.floor(Math.random() * 1800);
      const total = spins * 1800 + rand;

      $('#wheel').css({
         transform: `rotate(${total}deg)`
      });

      setTimeout(() => {
         const finalRotation = total % 360;
         const sectionSize = 60;
         const index = Math.floor(((360 - finalRotation + sectionSize / 2) % 360) / sectionSize);
         const result = sections[index];

         let message = "";
         let showLink = false;

         switch (result) {
            case "Dinero":
               message = "💸 Mejor gira otra vez…";
               break;
            case "Cena":
               message = "🍽️ Cena ganada, pero hay algo mejor…";
               break;
            case "Besos":
               message = "😘 Eso nunca falta, gira de nuevo…";
               break;
            case "Viaje":
               message = "✈️ Viajaremos mucho, pero sigue girando…";
               break;
            case "Playa":
               message = "🏖️ La playa espera, pero hay sorpresa…";
               break;
            case "Sorpresa":
               message = "❤️ ¡Ganaste la sorpresa especial!";
               showLink = true;
               break;
         }

         $('#winnerText').html(message);
         showLink ? $('#winnerLink').show() : $('#winnerLink').hide();
         $('#winnerBox').fadeIn();
      }, 3500);
   });
});
