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




    






// fondo usado en https://devdevout.com/css/css-animated-backgrounds
(function($){
	var canvas = $('#bg').children('canvas'),
		background = canvas[0],
		foreground1 = canvas[1],
		foreground2 = canvas[2],
		config = {
			circle: {
				amount: 18,
				layer: 3,
				color: [157, 97, 207],
				alpha: 0.3
			},
			line: {
				amount: 12,
				layer: 3,
				color: [255, 255, 255],
				alpha: 0.3
			},
			speed: 0.5,
			angle: 20
		};

	if (background.getContext){
		var bctx = background.getContext('2d'),
			fctx1 = foreground1.getContext('2d'),
			fctx2 = foreground2.getContext('2d'),
			M = window.Math, // Cached Math
			degree = config.angle/360*M.PI*2,
			circles = [],
			lines = [],
			wWidth, wHeight, timer;
		
		requestAnimationFrame = window.requestAnimationFrame || 
			window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			function(callback, element) { setTimeout(callback, 1000 / 60); };

		cancelAnimationFrame = window.cancelAnimationFrame ||
			window.mozCancelAnimationFrame ||
			window.webkitCancelAnimationFrame ||
			window.msCancelAnimationFrame ||
			window.oCancelAnimationFrame ||
			clearTimeout;

		var setCanvasHeight = function(){
			wWidth = $(window).width();
			wHeight = $(window).height(),

			canvas.each(function(){
				this.width = wWidth;
				this.height = wHeight;
			});
		};

		var drawCircle = function(x, y, radius, color, alpha){
			var gradient = fctx1.createRadialGradient(x, y, radius, x, y, 0);
			gradient.addColorStop(0, 'rgba('+color[0]+','+color[1]+','+color[2]+','+alpha+')');
			gradient.addColorStop(1, 'rgba('+color[0]+','+color[1]+','+color[2]+','+(alpha-0.1)+')');

			fctx1.beginPath();
			fctx1.arc(x, y, radius, 0, M.PI*2, true);
			fctx1.fillStyle = gradient;
			fctx1.fill();
		};

		var drawLine = function(x, y, width, color, alpha){
			var endX = x+M.sin(degree)*width,
				endY = y-M.cos(degree)*width,
				gradient = fctx2.createLinearGradient(x, y, endX, endY);
			gradient.addColorStop(0, 'rgba('+color[0]+','+color[1]+','+color[2]+','+alpha+')');
			gradient.addColorStop(1, 'rgba('+color[0]+','+color[1]+','+color[2]+','+(alpha-0.1)+')');

			fctx2.beginPath();
			fctx2.moveTo(x, y);
			fctx2.lineTo(endX, endY);
			fctx2.lineWidth = 3;
			fctx2.lineCap = 'round';
			fctx2.strokeStyle = gradient;
			fctx2.stroke();
		};

		var drawBack = function(){
			bctx.clearRect(0, 0, wWidth, wHeight);

			var gradient = [];
			
			gradient[0] = bctx.createRadialGradient(wWidth*0.3, wHeight*0.1, 0, wWidth*0.3, wHeight*0.1, wWidth*0.9);
			gradient[0].addColorStop(0, 'rgb(0, 26, 77)');
			gradient[0].addColorStop(1, 'transparent');

			bctx.translate(wWidth, 0);
			bctx.scale(-1,1);
			bctx.beginPath();
			bctx.fillStyle = gradient[0];
			bctx.fillRect(0, 0, wWidth, wHeight);

			gradient[1] = bctx.createRadialGradient(wWidth*0.1, wHeight*0.1, 0, wWidth*0.3, wHeight*0.1, wWidth);
			gradient[1].addColorStop(0, 'rgb(0, 150, 240)');
			gradient[1].addColorStop(0.8, 'transparent');

			bctx.translate(wWidth, 0);
			bctx.scale(-1,1);
			bctx.beginPath();
			bctx.fillStyle = gradient[1];
			bctx.fillRect(0, 0, wWidth, wHeight);

			gradient[2] = bctx.createRadialGradient(wWidth*0.1, wHeight*0.5, 0, wWidth*0.1, wHeight*0.5, wWidth*0.5);
			gradient[2].addColorStop(0, 'rgb(40, 20, 105)');
			gradient[2].addColorStop(1, 'transparent');

			bctx.beginPath();
			bctx.fillStyle = gradient[2];
			bctx.fillRect(0, 0, wWidth, wHeight);
		};

		var animate = function(){
			var sin = M.sin(degree),
				cos = M.cos(degree);

			if (config.circle.amount > 0 && config.circle.layer > 0){
				fctx1.clearRect(0, 0, wWidth, wHeight);
				for (var i=0, len = circles.length; i<len; i++){
					var item = circles[i],
						x = item.x,
						y = item.y,
						radius = item.radius,
						speed = item.speed;

					if (x > wWidth + radius){
						x = -radius;
					} else if (x < -radius){
						x = wWidth + radius
					} else {
						x += sin*speed;
					}

					if (y > wHeight + radius){
						y = -radius;
					} else if (y < -radius){
						y = wHeight + radius;
					} else {
						y -= cos*speed;
					}

					item.x = x;
					item.y = y;
					drawCircle(x, y, radius, item.color, item.alpha);
				}
			}

			if (config.line.amount > 0 && config.line.layer > 0){
				fctx2.clearRect(0, 0, wWidth, wHeight);
				for (var j=0, len = lines.length; j<len; j++){
					var item = lines[j],
						x = item.x,
						y = item.y,
						width = item.width,
						speed = item.speed;

					if (x > wWidth + width * sin){
						x = -width * sin;
					} else if (x < -width * sin){
						x = wWidth + width * sin;
					} else {
						x += sin*speed;
					}

					if (y > wHeight + width * cos){
						y = -width * cos;
					} else if (y < -width * cos){
						y = wHeight + width * cos;
					} else {
						y -= cos*speed;
					}
					
					item.x = x;
					item.y = y;
					drawLine(x, y, width, item.color, item.alpha);
				}
			}

			timer = requestAnimationFrame(animate);
		};

		var createItem = function(){
			circles = [];
			lines = [];

			if (config.circle.amount > 0 && config.circle.layer > 0){
				for (var i=0; i<config.circle.amount/config.circle.layer; i++){
					for (var j=0; j<config.circle.layer; j++){
						circles.push({
							x: M.random() * wWidth,
							y: M.random() * wHeight,
							radius: M.random()*(20+j*5)+(20+j*5),
							color: config.circle.color,
							alpha: M.random()*0.2+(config.circle.alpha-j*0.1),
							speed: config.speed*(1+j*0.5)
						});
					}
				}
			}

			if (config.line.amount > 0 && config.line.layer > 0){
				for (var m=0; m<config.line.amount/config.line.layer; m++){
					for (var n=0; n<config.line.layer; n++){
						lines.push({
							x: M.random() * wWidth,
							y: M.random() * wHeight,
							width: M.random()*(20+n*5)+(20+n*5),
							color: config.line.color,
							alpha: M.random()*0.2+(config.line.alpha-n*0.1),
							speed: config.speed*(1+n*0.5)
						});
					}
				}
			}

			cancelAnimationFrame(timer);
			timer = requestAnimationFrame(animate);
			drawBack();
		};

		$(document).ready(function(){
			setCanvasHeight();
			createItem();
		});
		$(window).resize(function(){
			setCanvasHeight();
			createItem();
		});
	}
})(jQuery);