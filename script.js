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


let primerScrollUno = true;
window.addEventListener("scroll", () => {
  if (primerScrollUno) {
    document.getElementById("tarjetas").classList.add("visible"); 
    primerScrollUno = false;
  }
});

// PAGINA 2: ANIMACIONES DE LAS TARJETAS

let primerScrollDos = true;
window.addEventListener("scroll", () => {
  if (primerScrollDos) {
    document.querySelector(".primeraimagen").classList.add("visible");
    document.querySelector(".primertexto").classList.add("visible");
    primerScrollDos = false;
  }
});


const tarjetas = document.querySelectorAll('#contenedorTarjetas > div');
const observer = new IntersectionObserver((entries) => { 
  entries.forEach(entry => { 
    console.log('Intersección detectada:', entry.target);
    if (entry.isIntersecting) {
      const imagendos = entry.target.querySelector('.segundaimagen');
      const textodos = entry.target.querySelector('.segundotexto');
      const imagentres = entry.target.querySelector('.terceraimagen');
      const textotres = entry.target.querySelector('.tercertexto');
      if (imagendos) textodos.classList.add('visible');
      if (textodos) imagendos.classList.add('visible');
      if (imagentres) textotres.classList.add('visible');
      if (textotres) imagentres.classList.add('visible');
    }
  });
}, {
  threshold: 0.5,
  
});
tarjetas.forEach(tarjeta => observer.observe(tarjeta)); 

// PAGINA 2: BOTONES DEL VIDEO

document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('video');
  const botonplay = document.getElementById('play');
  const botonpausa = document.getElementById('pausa');

  if (video && botonplay && botonpausa) {
    botonplay.innerHTML = '<img src="./multimedia/imagenes/play.svg" alt="play">';
    botonpausa.innerHTML = '<img src="./multimedia/imagenes/pausa.svg" alt="pause">';

    botonplay.addEventListener('click', () => video.play());
    botonpausa.addEventListener('click', () => video.pause());

    setInterval(() => {
      const tiempoActual = document.getElementById('tiempoActual');
      if (tiempoActual) {
        const minutos = Math.floor(video.currentTime / 60);
        const segundos = Math.floor(video.currentTime % 60);
        tiempoActual.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
      }
    }, 1000);
  }
});



// PAGINA 3: ROMPECABEZAS



document.querySelectorAll('img[id^="imagen"]').forEach(img => {
    img.setAttribute('draggable', 'true');
    img.addEventListener('dragstart', evento => {
      console.log("arrastrando", img.id);
      evento.dataTransfer.setData('idImagen', img.id);
    });
}); 

let piezasCorrectas = 0;
let piezasColocadas = 0;
  
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
        const titulorompe = document.querySelector('.titulorompe')
        titulorompe.style.display = 'none'
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
            mensajeFinal.innerHTML = '<h1 style="color: #2f3645;">¡Felicitaciones! Puzzle correctamente resuelto 🎉</h1>';
          } else {
            mensajeFinal.innerHTML = '<h1 style="color: #2f3645;;">Lo sentimos, Puzzle no resuelto 😔 Prueba otra vez</h1>';
          }

          mensajeFinal.style.display = 'block';
        }, 1700);
      }
    }
  });
});



