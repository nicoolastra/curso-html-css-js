const seccion = document.getElementById('seccion1');

seccion.addEventListener('scroll', () => {
  const nav = document.getElementById('navegador');
  console.log("scrollTop:", seccion.scrollTop);

  if (seccion.scrollTop > 50) {
    nav.style.backgroundColor = '#fff';
    nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  } else {
    nav.style.backgroundColor = 'transparent';
    nav.style.boxShadow = 'none';
  }
});
