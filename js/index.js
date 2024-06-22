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
    const duration = 24 * 60 * 60; // 24 hours in seconds
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

  document.getElementById('mostrarsubscripciones').addEventListener('click', function() {
    var mostrarsubscripciones=  $('#mostrarsubscripciones');
    var recuadrobanner = $('.recuadro');
    if (recuadrobanner.css('visibility') === 'visible') {
      recuadrobanner.css('visibility', 'hidden');
      mostrarsubscripciones.text("Subscripciones ▲");
    } else {
      recuadrobanner.css('visibility', 'visible');
      mostrarsubscripciones.text("Subscripciones ▼");
  }
  });



  
  document.getElementById('myVideo').addEventListener('ended', function() {
    var recuadrobanner = $('.recuadro');
    recuadrobanner.css('visibility', 'visible');
  });











