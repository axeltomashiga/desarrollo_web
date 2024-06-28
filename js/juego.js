var urlParams = new URLSearchParams(window.location.search);
var gameId = urlParams.get('id');
console.log(gameId);

var f1=juegos_json[gameId].foto1
var f2=juegos_json[gameId].foto2
var f3=juegos_json[gameId].foto3
var imagen=juegos_json[gameId].imagen
var nombre=juegos_json[gameId].nombre

var foto1 = $(`#foto1`);
foto1.append(`
    <img src="img/${f1}" class="d-block w-100" alt="Imagen 1">
`);
var foto2 = $(`#foto2`);
foto2.append(`
    <img src="img/${f2}" class="d-block w-100" alt="Imagen 2">
`);
var foto3 = $(`#foto3`);
foto3.append(`
    <img src="img/${f3}" class="d-block w-100" alt="Imagen 3">
`);
var foto_portada = $(`#aside-game`);
foto_portada.prepend(`
    <img src="img/${imagen}" alt="portada ${juegos_json[gameId].nombre}"></img>
`);
var descripcion_corta = $(`#descripcion_corta`);
descripcion_corta.text(juegos_json[gameId].descripcion)

var descripcion_corta = $(`#descripcion_media`);
descripcion_corta.text(juegos_json[gameId].descripcion_media)

var descripcion_corta = $(`#descripcion_larga`);
descripcion_corta.text(juegos_json[gameId].descripcion_larga)

var titulo_principal = $(`#principal-title`);
titulo_principal.text(juegos_json[gameId].nombre)


var nombre_objeto = $(`h2`);
nombre_objeto.text(nombre)

var nombre_objeto = $(`#precio`);
nombre_objeto.text(juegos_json[gameId].precio)

$(document).ready(function() {
    $('#buyGameModal').on('show.bs.modal', function(event) {
      var button = $(event.relatedTarget);
      var modal = $(this);
      modal.find('.modal-title').text('Compra de ' + juegos_json[gameId].nombre);
      modal.find('#modalPrice').text(juegos_json[gameId].precio);
    });
});
  
$(document).ready(function() {
    // Escucha el evento de envío del formulario
    $("#buyGameForm").on("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe

        // Verifica si el formulario es válido
        if ($(this)[0].checkValidity()) {
            // Cierra el modal
            $("#buyGameModal").modal("hide");
            $("#successBuyModal").modal("show");
        } else {
            // Si hay errores de validación, muestra los mensajes
            $(this).addClass("was-validated");
        }
    });
});