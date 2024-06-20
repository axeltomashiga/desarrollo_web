function initializeCarousel(id, listaDeListas) {
    const carousel = $(`#${id}`);
    
    for (let i = 0; i < listaDeListas.length; i++) {
        console.log(`Agregando elemento ${i + 1} a ${id}`);
        carousel.append(`
        <div class="item row row-cols-1 justify-content-start g-0">
            <div class="auxiliar col justify-content-center">
                <div class="product-card">
                    <div class="front">
                        <div class="product-image">
                            <a class="product-box-image" href="plantilla_juego.html" >
                                <img src="img/${listaDeListas[i][2]}" alt="">
                            </a>
                        </div>
                        <div class="product-details">
                            <h4 class="product-title">${listaDeListas[i][0]}</h4>
                            <p class="product-price">${listaDeListas[i][3]}</p>
                            <button class="descripcion">Descripcion</button>
                        </div>
                    </div>
                    <div class="back">
                        <div class="overlay">
                            <div class="reglonoverlay">${listaDeListas[i][1]}</div> 
                            <button class="descripcion">Voltear</button>  
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
        `);
    }
}

$(document).ready(function() {

    console.log('Hola, mundo!');

    let listadeaccion = [
        ['Cyberpunk', 'Un RPG de mundo abierto futurista donde juegas como V, un mercenario en la ciudad de Night City.', 'cyberpunk_2077_portada.jpg', '$19.99'],
        ['GTA 6', 'El próximo título en la serie Grand Theft Auto, conocido por su juego de mundo abierto y narrativa rica.', 'grand_theft_auto.jpg', '$59.99'],
        ['Rust', 'Un juego de supervivencia multijugador donde debes recolectar recursos, construir y defenderte de otros jugadores.', 'rustimg.webp', '$39.99'],
        ['Darksouls', 'Un desafiante RPG de acción conocido por su jugabilidad intensa y su narrativa profunda.', 'darksouls.jpg', '$59.99'],
        ['Mortal Kombat', 'Un icónico juego de lucha conocido por sus gráficos detallados y movimientos finales únicos.', 'mortalkombat.jpg', '$19.99'],
        ['Assasins creed', 'Un icónico juego de lucha conocido por sus gráficos detallados y movimientos finales únicos.', 'assasinscreed.jpeg', '$39.99'],
        ['The last of us', 'Un icónico juego de lucha conocido por sus gráficos detallados y movimientos finales únicos.', 'thelastofus.jpg', '$39.99']

    ];

    
    let listadedeportes = [
        ['Fifa 25', 'El último juego de la serie FIFA, ofreciendo una experiencia de fútbol realista con equipos y jugadores actualizados.', 'fifa25.jpg', '$39.99'],
        ['NBA 2k25', 'La edición más reciente de la popular serie de juegos de baloncesto, conocida por su realismo y jugabilidad.', 'NBA.png', '$19.99'],
        ['MADDEN 2025', 'El nuevo título de la serie Madden NFL, que ofrece una experiencia de fútbol americano con gráficos mejorados y jugabilidad profunda.', 'madden.jpeg', '$59.99'],
        ['Descenders', 'Un juego de ciclismo extremo de downhill con niveles generados proceduralmente y físicas realistas.', 'descenders.jpg', '$19.99'],
        ['Forza Horizon', 'Un juego de carreras en mundo abierto, conocido por sus gráficos impresionantes y una amplia variedad de coches.', 'forzahorizon.jpg', '$39.99']
    ];
    
    let listadedisparos = [
        ['Counter Strike', 'La secuela del clásico juego de disparos en primera persona, conocido por su jugabilidad competitiva y táctica.', 'counter.jpg', '$19.99'],
        ['Call of Duty', 'Una popular serie de juegos de disparos en primera persona, conocida por su campaña intensa y multijugador adictivo.', 'callofduty.jpg', '$59.99'],
        ['Hell Let Loose', 'Un juego de disparos en primera persona ambientado en la Segunda Guerra Mundial, con un enfoque en la estrategia y el trabajo en equipo.', 'hellletloose.jpg', '$39.99'],
        ['Battlefield', 'Una serie de juegos de disparos en primera persona, conocida por sus grandes mapas, vehículos y combates épicos.', 'battlefield.jpg', '$59.99'],
        ['Nuketown', 'Una serie de juegos de disparos en primera persona, conocida por sus grandes mapas, vehículos y combates épicos.', 'nuketown.jpg', '$19.99']
    ];




    const carousel = $(".owl-carousel");

    initializeCarousel('accion', listadeaccion);
    initializeCarousel('deporte', listadedeportes);
    initializeCarousel('disparos', listadedisparos);



    $(".owl-carousel").owlCarousel({
        mouseDrag: true,
        loop: true, // Hacer que el carrusel sea infinito
        margin: 15, // Espacio entre los elementos
        nav: true, // Mostrar botones de navegación
        autoplay: false, // Activar la reproducción automática
        dots: false,
        responsive: {
            0: {
              items: 2,
              rows: 2 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            768: {
              items: 4,
              rows: 3 //custom option not used by Owl Carousel, but used by the algorithm below
            },
            991: {
              items: 6,
              rows: 2 //custom option not used by Owl Carousel, but used by the algorithm below
            }
          }
        });

  







        document.querySelectorAll('.descripcion').forEach(button => {
            button.addEventListener('click', function() {
                var productCard = this.closest('.product-card');
        
                if (productCard.classList.contains('show-back')) {
                    // Si el productCard ya tiene la clase 'show-back', quítala
                    productCard.classList.remove('show-back');
                } else {
                    // Cerrar todos los overlays primero
                    document.querySelectorAll('.product-card').forEach(card => {
                        card.classList.remove('show-back');
                    });
                    
                    // Abrir el overlay de la carta específica
                    productCard.classList.add('show-back');
                }
            });
        });
});




    


