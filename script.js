console.log('scrollY:', window.scrollY);

window.addEventListener('scroll', () => {
  
  const nav = document.getElementById('navegador');
  console.log('scrollY:', window.scrollY);
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

window.addEventListener('scroll', () => { // Para verificar el scroll de la ventana
  console.log('window scrollY:', window.scrollY); // Muestra la posición del scroll de la ventana
});

document.getElementById('seccion1').addEventListener('scroll', () => { // Para verificar el scroll de un elemento específico
  console.log('seccion1 scrollTop:', document.getElementById('seccion1').scrollTop); // Muestra la posición del scroll del elemento con id "seccion1"
});




/* para que la animacion de la imagen se reproduzca una vez que el usuario hace scroll */


const observer = new IntersectionObserver((entries) => { // Crea un nuevo IntersectionObserver
  entries.forEach(entry => { // Recorre cada entrada del observer
    if (entry.isIntersecting) { // Verifica si la entrada está intersectando
      entry.target.classList.add('aparecer-izq'); // Agrega la clase 'aparecer' al elemento que está intersectando
    }
  });
}, {
  threshold: 0.5 // ajustá esto según el punto donde querés que se active
});

