
let noticias = [
    {   
        href:'https://www.3djuegos.com/juegos/cyberpunk-2077/noticias/cyberpunk-2077-era-ambicioso-que-pensabamos-cd-projekt-estaba-trabajando-segunda-expansion-basada-luna-que-se-cancelo',
        title: 'Cyberpunk 2077 era más ambicioso de lo que pensábamos',
        description: '¿Te acuerdas cuándo se lanzó Cyberpunk 2077? Muchos jugadores, especialmente de consolas, se sintieron traicionados por CD Projekt RED debido al lamentable estado en el que se encontraba.',
        img: './img/noticias/cyberpunk.jpeg'
    },
    {   
        href:'https://depor.com/depor-play/videojuegos/fifa-24-ea-sports-fc-mobile-tiene-fecha-de-lanzamiento-como-hacer-la-instalacion-fifa-mobile-fifa-soccer-android-ios-mexico-espana-mx-noticia/',
        title: 'EA Sports FC Mobile: qué día es es lanzamiento y cómo instalarlo en Android y iOS',
        description: 'Vinicius Jr., la estrella del fútbol brasileño, protagoniza la portada de EA Sports FC Mobile. Puedes ver el adelanto oficial del videojuego de Electronic Arts aquí.',
        img: './img/noticias/fifa.avif'
    },
    {   
        href:'https://www.3djuegos.com/juegos/cyberpunk-2077/noticias/cyberpunk-2077-era-ambicioso-que-pensabamos-cd-projekt-estaba-trabajando-segunda-expansion-basada-luna-que-se-cancelo',
        title: 'La teoría del iceberg y cómo ha hecho que Dark Souls atrape a millones de personas',
        description: '¿Cómo olvidar la primera vez que pisé Lordran? No solo es que era mi primera experiencia con Dark Souls, imagínate novato total. Es que todo me parecía intimidante: los enemigos implacables, las trampas mortales, la sensación constante de peligro acechando en cada esquina. ',
        img: './img/noticias/dark-souls.jpeg'
    }
]

$(document).ready(function() {

    function crearCards(noticias) {
        noticias.forEach(function(noticia) {
            let card = `
                <div class="noticias-card">
                    <div class="noticias-img-container">
                        <img src="${noticia.img}" alt="${noticia.title}">
                    </div>
                    <div class="noticias-description">
                        <h3>${noticia.title}</h3>
                        <p>${noticia.description}</p>
                        <a href="${noticia.href}" target="_blank">
                            <span class="see-more">Ver más</span>   
                        </a>
                    </div>
                </div>
            `;
            $('#noticias-container').append(card);
        });
    }

    crearCards(noticias);
});
