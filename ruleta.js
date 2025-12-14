$(document).ready(function () {
   let spins = 0;
   const sections = ["Dinero", "Cena", "Besos", "Viaje", "Sorpresa", "Playa"];

   $('.spin-button').click(function () {
      $('#winnerBox').hide();
      spins++;
      const randDegree = Math.floor(Math.random() * 1800) + 1;
      const totalDegree = spins * 1800 + randDegree;
      $('#wheel').css({ 'transform': 'rotate(' + totalDegree + 'deg)' });

      setTimeout(function () {
         const finalRotation = totalDegree % 360;
         const sectionAngle = 60;
         // índice de la sección según el ángulo (ajustado)
         const index = Math.floor(((360 - finalRotation + sectionAngle / 2) % 360) / sectionAngle);
         const result = sections[index];

         let message = "";
         let showLink = false;

         switch (result) {
            case "Dinero":
               message = "💸 Yo sé que no eres materialista, así que te daré otra oportunidad...";
               break;
            case "Cena":
               message = "🍽️ Cena ganada, luego vamos por tacos, pero puedes ganar algo mejor...";
               break;
            case "Besos":
               message = "😘 Besos y abrazos estarán siempre garantizados, gira de nuevo...";
               break;
            case "Viaje":
               message = "✈️ Viajaremos siempre mucho, pero hay algo mejor esperándote...";
               break;
            case "Playa":
               message = "🏖️ Iremos a la playa, está cerca, se que quieres algo mejor...";
               break;
            case "Sorpresa":
               message = "❤️ ¡Ganaste una sorpresa especial!";
               showLink = true;
               break;
         }

         $('#winnerText').html(message);
         if (showLink) {
            $('#winnerLink').attr("href", "https://www.instagram.com/team.preciosos?igsh=MTJsOWY1cml0YWlqdQ%3D%3D&utm_source=qr'").show();
         } else {
            $('#winnerLink').hide();
         }
         $('#winnerBox').fadeIn();
      }, 3500);
   });
});