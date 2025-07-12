
  window.addEventListener('scroll', function () {
    const nav = document.getElementById('navegacion');
    if (window.scrollY > 50) {
      nav.classList.add('scrolleado');
    } else {
      nav.classList.remove('scrolleado');
    }
  });

// Esto lo podés disparar al cargar la página o cuando quieras mostrar el elemento
window.addEventListener('load', () => {
  document.getElementById('milogo').classList.add('visible');
});
