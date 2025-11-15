    function check() {
      const checkboxes = document.querySelectorAll('form input[type="checkbox"]');
      const allChecked = Array.from(checkboxes).every(cb => cb.checked);
      const wrapper = document.querySelector('.wrapper');
      const continuar = document.getElementById('continuar');

      if (allChecked) {
        wrapper.classList.add('throb');
        continuar.classList.add('mostrar');
      } else {
        wrapper.classList.remove('throb');
        continuar.classList.remove('mostrar');
      }
    }