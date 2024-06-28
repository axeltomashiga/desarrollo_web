$(document).ready(() => {

    $(window).on("scroll", () => {
        var newScroll = $(window).scrollTop();
        if (newScroll >= 200) {
            console.log("intento reproducir video")
            const video = document.getElementById('myVideo');
            video.play().catch(error => {
              console.log('Error al intentar reproducir el video:', error);
            });
            
        } else {}
        });
});

function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;

    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent =  hours + "hs " + minutes + "mins " + seconds + "secs";

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

window.onload = function () {
    const duration = 24 * 60 * 60;
    const display = document.getElementById('timer');
    startTimer(duration, display);
};

window.addEventListener('load', function() {
    const video = document.getElementById('myVideo');
    video.volume = 0.2; 
    video.muted = false;
   
  });

  document.getElementById('chevron').addEventListener('click', function() {
    const video = document.getElementById('myVideo');
    video.play().catch(error => {
      console.log('Error al intentar reproducir el video:', error);
    });
  });

  document.getElementById('mostrarsuscripciones').addEventListener('click', function() {
    var mostrarsuscripciones=  $('#mostrarsuscripciones');
    var recuadrobanner = $('.recuadro');
    if (recuadrobanner.css('visibility') === 'visible') {
      recuadrobanner.css('visibility', 'hidden');
      mostrarsuscripciones.text("Suscripciones ▲");
    } else {
      recuadrobanner.css('visibility', 'visible');
      mostrarsuscripciones.text("Suscripciones ▼");
  }
  });



  
  document.getElementById('myVideo').addEventListener('ended', function() {
    var recuadrobanner = $('.recuadro');
    recuadrobanner.css('visibility', 'visible');
  });

 
  document.getElementById('banner').addEventListener('click', function() {
    const video = document.getElementById('myVideo');
    video.play().catch(error => {
      console.log('Error al intentar reproducir el video:', error);
    });
  });




  document.getElementById('deluxe').addEventListener('click', function() {
    document.getElementById('deluxepadre').style.backgroundColor = 'grey';
    document.getElementById('extrapadre').style.backgroundColor = 'transparent';
    document.getElementById('essentialpadre').style.backgroundColor = 'transparent';

    const detalles = $('.detalle_sus_derecha');
    detalles.empty();
    detalles.append(`<p>Multijugador online 🎮</p>
                    <p>Juegos mensuales 🎁</p>
                    <p>Share Play 🤝</p>
                    <p>Contenido exclusivo 🔒</p>
                    <p>Almacenamiento en la nube ☁️</p>
                    <p>Acceso a eventos exclusivos 🎉</p>
                    <p>Descuentos adicionales en la tienda 🛒</p>`);



      var  explicacion_suscripcion=  $('#explicacion_suscripcion');
      explicacion_suscripcion.empty();
      explicacion_suscripcion.append('Explora la experiencia premium de AIDA Games: disfruta de multijugador online de élite, accede a una colección exclusiva de juegos AAA cada mes y aprovecha descuentos irresistibles en contenido exclusivo.')
                
});

document.getElementById('extra').addEventListener('click', function() {
    document.getElementById('extrapadre').style.backgroundColor = 'grey';
    document.getElementById('deluxepadre').style.backgroundColor = 'transparent';
    document.getElementById('essentialpadre').style.backgroundColor = 'transparent';

    const detalles = $('.detalle_sus_derecha');
    detalles.empty();
    detalles.append(`<p>Multijugador online 🎮</p>
                    <p>Juegos mensuales 🎁</p>
                    <p>Share Play 🤝</p>
                    <p>Contenido exclusivo 🔒</p>
                    <p>Almacenamiento en la nube ☁️</p>
                    <p>Acceso anticipado a nuevos juegos 🕹️</p>
                    <p>Ofertas exclusivas de juegos 🎮</p>`);

    var  explicacion_suscripcion=  $('#explicacion_suscripcion');
    explicacion_suscripcion.empty();
    explicacion_suscripcion.append('Sumérgete en lo mejor de AIDA Games con multijugador online avanzado, una selección exclusiva de juegos mensuales, mejoras en Share Play y acceso a ofertas especiales en contenido exclusivo y almacenamiento en la nube adicional.')
});

document.getElementById('essential').addEventListener('click', function() {
  document.getElementById('essentialpadre').style.backgroundColor = 'grey';
  document.getElementById('deluxepadre').style.backgroundColor = 'transparent';
  document.getElementById('extrapadre').style.backgroundColor = 'transparent';

  const detalles = $('.detalle_sus_derecha');
  detalles.empty();
  detalles.append(`<p>Multijugador online 🎮</p>
                  <p>Juegos mensuales 🎁</p>
                  <p>Share Play 🤝</p>
                  <p>Almacenamiento en la nube ☁️</p>
                  <p>Acceso limitado a descuentos 🚫</p>
                  <p>Eventos exclusivos limitados 🎟️</p>
                  <p>Funcionalidad básica de Share Play 🕹️</p>`);


  var  explicacion_suscripcion=  $('#explicacion_suscripcion');
  explicacion_suscripcion.empty();
  explicacion_suscripcion.append('Disfruta de todos los beneficios principales de PlayStation Plus: únete a tus amigos en el multijugador online, agrega nuevos juegos a tu colección cada mes, obtén ofertas increíbles')


});
