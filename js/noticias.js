
let noticias = [
    {   
        href:'https://www.3djuegos.com/juegos/cyberpunk-2077/noticias/cyberpunk-2077-era-ambicioso-que-pensabamos-cd-projekt-estaba-trabajando-segunda-expansion-basada-luna-que-se-cancelo',
        title: 'Cyberpunk 2077 era más ambicioso de lo que pensábamos',
        description: '¿Te acuerdas cuándo se lanzó Cyberpunk 2077? Muchos jugadores, especialmente de consolas, se sintieron traicionados por CD Projekt RED debido al lamentable estado en el que se encontraba.',
        img: '../img/noticias/cyberpunk.jpeg'
    },
    {   
        href:'https://www.3djuegos.com/juegos/cyberpunk-2077/noticias/cyberpunk-2077-era-ambicioso-que-pensabamos-cd-projekt-estaba-trabajando-segunda-expansion-basada-luna-que-se-cancelo',
        title: 'Cyberpunk 2077 era más ambicioso de lo que pensábamos',
        description: '¿Te acuerdas cuándo se lanzó Cyberpunk 2077? Muchos jugadores, especialmente de consolas, se sintieron traicionados por CD Projekt RED debido al lamentable estado en el que se encontraba.',
        img: '../img/noticias/cyberpunk.jpeg'
    },
    {   
        href:'https://www.3djuegos.com/juegos/cyberpunk-2077/noticias/cyberpunk-2077-era-ambicioso-que-pensabamos-cd-projekt-estaba-trabajando-segunda-expansion-basada-luna-que-se-cancelo',
        title: 'Cyberpunk 2077 era más ambicioso de lo que pensábamos',
        description: '¿Te acuerdas cuándo se lanzó Cyberpunk 2077? Muchos jugadores, especialmente de consolas, se sintieron traicionados por CD Projekt RED debido al lamentable estado en el que se encontraba.',
        img: '../img/noticias/cyberpunk.jpeg'
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
                        <a>
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
