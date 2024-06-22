const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('id');
console.log(gameId);

var f1='cyberpunk_f1.jpg'
var f2='cyberpunk_f2.gif'
var f3=''
var portada='cyberpunk_f3.jpg'
var nombre=juegos_json[gameId].nombre
console.log(nombre)

const foto1 = $(`#foto1`);
foto1.append(`
    <img src="img/${f1}" class="d-block w-100" alt="Imagen 1">
`);
const foto2 = $(`#foto2`);
foto2.append(`
    <img src="img/${f2}" class="d-block w-100" alt="Imagen 2">
`);
const foto3 = $(`#foto3`);
foto3.append(`
    <img src="img/${f3}" class="d-block w-100" alt="Imagen 3">
`);
const foto_portada = $(`#foto_aside`);
foto_portada.prepend(`
    <img src="img/${portada}" alt="portada cyberpunkasd"></img>
`);
const descripcion_corta = $(`#descripcion_corta`);
descripcion_corta.text(juegos_json[gameId].descripcion)

const nombre_objeto = $(`h2`);
nombre_objeto.text(nombre)