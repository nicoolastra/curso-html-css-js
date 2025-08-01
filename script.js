// PAGINA 1: NAVEGADOR FIJO AL HACER SCROLL

window.addEventListener('scroll', () => {
  
  const nav = document.getElementById('navegador');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// PAGINA 1: ANIMACIONES DE LAS TARJETAS



// PAGINA 2: ANIMACIONES DE LAS TARJETAS
/* para que la animacion de la imagen se reproduzca una vez que el usuario hace scroll */
let primerScroll = true;

window.addEventListener("scroll", () => {
  if (primerScroll) {
    document.querySelector(".tarjeta-historia1").classList.add("visible");
    primerScroll = false;
  }
});
const tarjetas = document.querySelectorAll('#contenedorTarjetas > div');

const observer = new IntersectionObserver((entries) => { // Creamos un observador de intersección para detectar cuando las tarjetas entran en el viewport
  entries.forEach(entry => { // Iteramos sobre cada entrada del observador
    console.log('Intersección detectada:', entry.target);
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5,
  
});
tarjetas.forEach(tarjeta => observer.observe(tarjeta)); // Observador para las tarjetas. Tarjeta al final significa que la tarjeta se ha cargado y se ha añadido al DOM

// PAGINA 2: BOTONES DEL VIDEO

const video = document.getElementById('video');
const botonplay = document.getElementById('play');
const botonpausa = document.getElementById('pausa');
botonplay.innerHTML = '<img src=./multimedia/imagenes/play.svg alt="play">';
botonpausa.innerHTML = '<img src=./multimedia/imagenes/pausa.svg alt="pause">';
botonplay.addEventListener('click', () => {
  video.play();
  
});
botonpausa.addEventListener('click', () => {
  video.pause();
  
});
// Actualizar el tiempo actual del video cada segundo
setInterval(() => {
  const tiempoActual = document.getElementById('tiempoActual');
  const minutos = Math.floor(video.currentTime / 60);
  const segundos = Math.floor(video.currentTime % 60);
  tiempoActual.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}, 1000);


// PAGINA 3: ROMPECABEZAS

 document.querySelectorAll('img[id^="imagen"]').forEach(img => {
    img.setAttribute('draggable', 'true');
    img.addEventListener('dragstart', evento => {
      evento.dataTransfer.setData('idImagen', img.id);
    });
  });

  let piezasCorrectas = 0;
  let piezasColocadas = 0;
  // Seleccionamos todas las zonas de soltar
  document.querySelectorAll('.zona-soltar').forEach((zona, i) => {
  zona.addEventListener('dragover', evento => evento.preventDefault());

  zona.addEventListener('drop', evento => {
    const idImagen = evento.dataTransfer.getData('idImagen');
    const imagen = document.getElementById(idImagen);
    const zonaID = `zona${i + 1}`;
    const imagenID = `imagen${i + 1}`;

    if (!zona.querySelector('img')) {
      zona.innerHTML = '';
      zona.appendChild(imagen);
      imagen.classList.add('sin-rotacion');
      piezasColocadas++;

      if (zona.id === zonaID && idImagen === imagenID) {
        piezasCorrectas++;
      }

      if (piezasColocadas === 3) {
        const contenedor = document.querySelector('.contenedorCajas');
        contenedor.style.gap = '0px';
        contenedor.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
        contenedor.style.transform = 'scale(1.3)';
        const boton = document.querySelector('.reiniciar');
        boton.style.display = 'block';
        setTimeout(() => {
          contenedor.style.opacity = '0';
        }, 900);

        setTimeout(() => {
          contenedor.style.display = 'none';
          const mensajeFinal = document.getElementById('mensajeFinal');

          if (piezasCorrectas === 3) {
            mensajeFinal.innerHTML = '<h1 style="color: #2ecc71;">¡Felicitaciones! Completaste el rompecabezas 🎉</h1>';
          } else {
            mensajeFinal.innerHTML = '<h1 style="color: #e74c3c;">Lo sentimos, rompecabezas fallido 😔</h1>';
          }

          mensajeFinal.style.display = 'block';
        }, 1700);
      }
    }
  });
});