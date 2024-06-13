$(document).ready(() => {
    // Define y añade el elemento <style> al <head>
    var style = $('<style></style>').appendTo('head');

    $(window).on("scroll", () => {
        var newScroll = $(window).scrollTop();

        
        var barra = $('header');
        var banner = $('.banner');

        if (newScroll >= 52) {
            barra.addClass('bg-black');
            // barra.addClass('bg-black')
        } else {
            barra.removeClass('bg-black');
            // barra.removeClass('bg-black')

        }

        // Calcula la nueva posición
        var newPos = -523 + newScroll/15;

        
        // Actualiza la regla CSS para cambiar background-position-y
        style.html(`.banner::before { background-position-y: ${newPos}px; }`);
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













// $(document).ready(()=>{
//     var blanco = $('#blanco').click(cambiarColor);

//     // Función para cambiar el color de fondo de la caja a rojo
//     function cambiarColor() {
//         blanco.css('backgroundColor','green');
//     }
// })



// var blanco = $('#barra').click(cambiarColor);



