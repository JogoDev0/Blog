import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class BloggingService {

  arrPost: Post[];

  constructor() {
    this.arrPost = [
      {
        id: 0,
        titulo: 'Xiaomi Mi Band 5, análisis: la mejor Mi Band hasta la fecha no es para todo el mundo',
        texto: `Hablar de Mi Band es hacer referencia a uno de los accesorios para móviles más vendidos del mundo, también alude a una gama muy prolífica. Y con la Mi Band 5 Xiaomi ha conseguido evolucionar su "wearable" hacia el lado más deportivo; sin perder dos de sus virtudes: ser suficientemente económica y versátil, lo hemos comprobado. ${'\n'}
        Llevar el recuento de pasos, calorías, disponer del reflejo de las notificaciones del móvil en la muñeca y despertarnos con la vibración de la pulsera son tareas habituales que se hicieron muy asequibles con la irrupción de Xiaomi en el mercado de las pulseras de actividad. Fiel a su renovación constante, el modelo más actual, denominado como Xiaomi Mi Band 5, está ya a la venta en España. Y hemos pasado un tiempo con ella para descubrir sus ventajas e inconvenientes, también para saber si vale la pena o no comprar este modelo o el anterior...`,
        autor: 'IVÁN LINARES',
        imagen: 'https://i.blogs.es/002322/xiaomi-mi-band-5-30/1024_682.jpg',
        fecha: new Date(2020, 6, 29),
        categoria: 'ANÁLISIS'
      },
      {
        id: 1,
        titulo: 'Mega-guía para montarte un cine en casa: proyector, pantalla, sistema de sonido y más',
        texto: `Puede que las TV sigan creciendo y las tecnologías que implementan sean cada vez más ambiciosas, pero para quienes amamos el séptimo arte, la experiencia de ver películas en el cine es algo especial: los tráilers iniciales, las palomitas, las luces apagadas y ese sonido que nos envuelve para sumergirnos en el film. Montar un cine en casa es una misión tan exigente que a menudo está determinada no solo por la estancia disponible sino por nuestro presupuesto.${'\n'}
        En esta megaguía para montar un cine en casa repasamos todo lo que tener en cuenta y os sugerimos varias propuestas para que lo hagáis realidad independientemente de vuestro bolsillo...`,
        autor: 'EVA RODRÍGUEZ DE LUIS',
        imagen: 'https://i.blogs.es/12bdd1/cine/1024_682.jpg',
        fecha: new Date(2020, 7, 8),
        categoria: 'SELECCIÓN'
      },
      {
        id: 2,
        titulo: 'Samsung Galaxy Note 20 y Note 20 Ultra: aún más grandes y con un S Pen preparado para la productividad y el juego',
        texto: `Samsung no ha fallado a su cita anual para presentar la segunda ronda de sus buques insignia y aquí los tenemos, junto a otros nuevos productos. Los nuevos Samsung Galaxy Note 20 y Note 20 Ultra siguen la estela de los anteriores con dos versiones, una más contenida que la otra, pero con un mismo diseño.${'\n'}
        Veremos que, como ocurrió con los Samsung Galaxy Note 10 y 10+, las diferencias se fundamentan en cámara, memoria y pantalla, pero lo que también tienen en común es el S Pen. Los terminales bandera del puntero de Samsung vienen con el último procesador de la compañía, cámara frontal insertada en la pantalla y el resto de características que ahora detallaremos...`,
        autor: 'ANNA MARTÍ',
        imagen: 'https://i.blogs.es/caba0d/samsung-galaxy-note-20--note-20-ultra-00/1024_682.jpg',
        fecha: new Date(2020, 7, 5),
        categoria: 'MÓVILES'
      },
      {
        id: 3,
        titulo: 'Cada vez hay más personas con alergias y la ciencia aún no tiene una respuesta para eliminarlas',
        texto: `Las alergias acompañan al ser humano desde que comenzó a ser su propia especie. Sin embargo, parece que es ahora, y no hace un siglo, por ejemplo, cuando más hablamos de ellas. Esto se debe, en gran parte, a que están aumentando.${'\n'}
        Las cifras parecen apuntar, sin lugar a muchas dudas, que cada vez hay más personas alérgicas. Por si fuera poco, expertos de todo el mundo han comenzado a advertir que el cambio climático podría empeorar el panorama. Con toda la medicina y ciencia que hemos adquirido durante todos estos años, ¿por qué no hemos sido capaces de eliminar las alergias de nuestra vida?...`,
        autor: 'SANTIAGO CAMPILLO',
        imagen: 'https://i.blogs.es/26fbe7/photo-1470217957101-da7150b9b681/1024_682.jpg',
        fecha: new Date(2020, 7, 7),
        categoria: 'CIENCIA'
      },
      {
        id: 4,
        titulo: '"Rick y Morty" se transforman en personajes de anime con guiños a clásicos de la animación japonesa como "Akira" o "Dragon Ball"',
        texto: `Por segundo año, para promocionar la programación de Toonami (el bloque dedicado al anime de Adult Swim, la facción de animación para adultos de Cartoon Network), 'Rick y Morty' presenta una breve pieza de animación que hereda los temas y personajes de la serie norteamericana, pero le da un baño de estética y ritmo netamente nipones.${'\n'}
        El año pasado se mantenía cierto estilo similar al de la serie original con 'Samurai & Shogun', un violento homenaje a las clásicas películas de 'Samurai Assassin' (o 'Lobo solitario y su cachorro'). Este año el resultado es aún más fascinante: una mezcla de parodia y autoreferencia que, en este caso además, conviene ver en un par de tandas para no dejar pasar ningún detalle...`,
        autor: 'JOHN TONES',
        imagen: 'https://i.blogs.es/d6eeab/rickanime/1366_2000.jpg',
        fecha: new Date(2020, 6, 27),
        categoria: 'CINE Y TV'
      },
      {
        id: 5,
        titulo: 'Motorola Moto G 5G, análisis: la vuelta de la familia "G" a la mejor gama media es un gran rival',
        texto: `Tras años dominando la gama media Motorola fue perdiendo posiciones debido a la incursión de las marcas chinas. Y un nuevo teléfono aspira a recuperar el puesto, el Motorola Moto G 5G Plus. La apuesta es arriesgada, pero también muy sólida: lo hemos comprobado.${'\n'}
        Con la irrupción del 5G pensábamos que los móviles de gama media tardarían en obtener la nueva conectividad, pero no ha sido así: la línea que va de los 300 a los 500 euros tiene ya muy buenos contendientes a convertirse en representantes 'accesibles' del 5G. Y Motorola ha querido sumar la familia Moto G a esa avanzadilla de irreductibles: el Moto G 5G Plus está dispuesto a dar mucha guerra...`,
        autor: 'IVÁN LINARES',
        imagen: 'https://i.blogs.es/085c06/motorola-moto-g-5g-plus-5/1024_682.jpg',
        fecha: new Date(2020, 7, 11),
        categoria: 'ANÁLISIS'
      },
      {
        id: 6,
        titulo: 'Guía de compra para disfrutar de las noches estrelladas: 24 telescopios, prismáticos, gadgets, accesorios y más',
        texto: `Las cálidas y despejadas noches de verano son la época ideal para iniciarse en la astronomía. Si además tenemos en cuenta la tradicional — pero no por ello menos espectacular — lluvia de estrellas de San Lorenzo, mejor todavía. Si este 2020 quieres disfrutar de las Perseidas al detalle, en esta guía de compra encontrarás una selección de dispositivos, accesorios y gadget para observar al cielo: telescopios, binoculares y mucho más.${'\n'}
        Telescopios y prismáticos${'\n'}
        El telescopio es el instrumento por excelencia para para mirar al cielo y buscar cuerpos celestes, ya que por su tipo óptica nos permiten visualizar objetos en plena oscuridad.${'\n'}        
        No obstante, otra opción interesante para iniciarse en astronomía son los prismáticos, más ligeros y compactos para usarlos en movilidad y con la ventaja de ofrecer mayor versatilidad, ya que también sirven para otras actividades. Eso sí, no vale cualquier binocular para astronomía. Un buen punto de partida son los 10x50 — 10 aumentos y diámetro de la lente de 50 mm —, algo en lo que profundizaremos más adelante.${'\n'}        
        Los telescopios se dividen en tres tipos en función de su sistema óptico para formar imágenes, que les confieren una serie de características: refractores, reflectores y catadióptricos, este último una combinación de los dos primeros...`,
        autor: 'EVA RODRÍGUEZ DE LUIS',
        imagen: 'https://i.blogs.es/0c69af/astrology-astronomy-constellation-2034892/1366_2000.jpg',
        fecha: new Date(2020, 7, 11),
        categoria: 'SELECCIÓN'
      },
      {
        id: 7,
        titulo: 'Xiaomi Mi 10 Ultra: el primer móvil de la historia con carga súper rápida a 120W y zoom de hasta 120x',
        texto: `Si erais de los que pensaban que la estirpe de los Mi 10 se acababa con los Xiaomi Mi 10, Xiaomi Mi 10 Pro y Xiaomi Mi 10 Lite esto os pillará de sorpresa, porque la marca ha anunciado el nuevo Xiaomi Mi 10 Ultra. Un móvil que viene para ser el buque insignia de la marca con más derecho que sus predecesores presumiendo sobre todo de zoom.${'\n'} 
        Un móvil que llega por el décimo aniversario de la marca y que estrena carga rápida llegando a los 120W, siendo el primer móvil que se comercializa con ello. Mantiene algunas características en común con el Mi 10 Pro, aunque veremos que en el diseño se sabe a la legua cuál es cuál mirando a la trasera...`,
        autor: 'ANNA MARTÍ ',
        imagen: 'https://i.blogs.es/280562/xiaomi-mi-10-ultra-01/500_333.jpg',
        fecha: new Date(2020, 7, 11),
        categoria: 'MÓVILES'
      },
      {
        id: 8,
        titulo: 'Rusia dice que ya tiene una vacuna contra el coronavirus; el mundo les mira con incredulidad',
        texto: `El presidente de Rusia, Vladímir Putin, acaba de anunciar que el país ha conseguido desarrollar con éxito la que sería la primera vacuna contra el coronavirus. Es más, según explica Reuters, Putin no solo ha asegurado que la vacuna ha sido registrada y aprobada por las autoridades sanitarias del país, sino que su propia hija se ha vacunado con ella.${'\n'} 
        "Esta mañana se ha registrado, por primera vez en el mundo, una vacuna contra el nuevo coronavirus", ha anunciado Putin en una reunión con el Gabinete de Ministros, a la vez que anunciaba que pronto empezaría a fabricarse en serie. Sin embargo, más allá del triunfalismo ruso, las noticias de la vacuna siguen siendo vistas con escepticismo e incredulidad y las dudas sobre su calidad siguen encima de la mesa...`,
        autor: 'JAVIER JIMÉNEZ',
        imagen: 'https://i.blogs.es/c8e4ff/putin-the-kremlin-government-russia-policy-2847423/1366_2000.jpg',
        fecha: new Date(2020, 7, 11),
        categoria: 'CIENCIA'
      },
      {
        id: 9,
        titulo: 'Netflix estrena en agosto "High Score", serie documental sobre los videojuegos y consolas clásicas',
        texto: `Un poco por sorpresa, ya que no aparecía en su listado de estrenos previstos para agosto, Netflix ha deslizado entre sus próximos programas para finales de verano la serie documental "High Score". En ella hablará de la edad dorada de los videojuegos: la invención del medio, las primeras recreativas y las generaciones inaugurales de videoconsolas y microordenadores. Su estreno está previsto el próximo 19 de agosto.${'\n'} 
        La narración del documental, de seis episodios, contará con una personalidad muy especial para los amantes de los juegos retro: Charles Martinet, la voz en inglés de Super Mario. Entre las personalidades que aparecen en el trailer hay diseñadores procedentes de nombres esenciales para la industria, como Activision o Nintendo, y por lo que se deduce de este trailer inicial, el documental irá más allá de la etapa primigenia de las recreativas y se adentrará en los primeros noventa, cuando los videojuegos se hicieron mainstream y la guerra entre Sega y Nintendo cambió la industria, e incluso más allá, adentrándose en los primeros gráficos poligonales...`,
        autor: 'JOHN TONES',
        imagen: 'https://i.blogs.es/22d934/ee5fasdxyaa8mwb/1366_2000.jpg',
        fecha: new Date(2020, 7, 11),
        categoria: 'CINE Y TV'
      },
      {
        id: 10,
        titulo: 'Kobo Nia, análisis: ideal para quien no quiere gastarse más de 100 euros en un libro electrónico',
        texto: `Kobo, la marca de libros electrónicos de Rakuten, se ha hecho popular con sus dispositivos que buscan ser una alternativa a los omnipresentes Kindle. Y ahora, con el escenario de la pandemia, ha lanzado el Nia para atraer a todos aquellos que busquen un dispositivo económico y ligero.${'\n'} 
        El Kobo Nia no quiere sorprender gracias a alguna característica revolucionaria. Se enfoca en hacer los sacrificios justos y necesarios para llegar a cuantos más bolsillos mejor, así que vamos a ver todo lo que da de sí en nuestro análisis...`,
        autor: 'MIGUEL LÓPEZ',
        imagen: 'https://i.blogs.es/4291c9/kobo_nia/1024_682.jpg',
        fecha: new Date(2020, 6, 26),
        categoria: 'ANÁLISIS'
      },
      {
        id: 11,
        titulo: 'Hazte con el nuevo y ligerísimo patinete eléctrico Xiaomi Mi Scooter Essential más barato en eBay: 260 euros con envío gratis',
        texto: `Xiaomi tiene nuevos patinetes eléctricos en su catálogo de productos y ahora mismo puedes comprar el ligero y sencillo Xiaomi Mi Scooter Essential – el modelo más básico – con una buena rebaja: 251,99 euros en eBay.${'\n'} 
        El precio de venta recomendando de este Xiaomi Mi Scooter Essential es de 299 euros, pero si quieres ahorrarte casi 50 euros sin recurrir a la importación, en eBay está a la venta por 251,99 euros con envío rápido desde España y un año de garantía. Para ello solo has de usar el cupón PXIAOMI10 durante el proceso de compra (stock limitado, el cupón caduca el 30 de septiembre)...`,
        autor: 'EVA RODRÍGUEZ DE LUIS',
        imagen: 'https://i.blogs.es/2122cb/essen/500_333.jpg',
        fecha: new Date(2020, 7, 12),
        categoria: 'SELECCIÓN'
      },
      {
        id: 12,
        titulo: 'Surface Duo: Microsoft anuncia el precio de su móvil plegable y estará disponible a partir de septiembre (en Estados Unidos)',
        texto: `Microsoft nos mostró (aunque bien poco) su móvil plegable con Android: el Surface Duo. La vuelta de los de Redmond al territorio smartphone fue por todo lo alto con este teléfono móvil con dos pantallas y Android como sistema operativo, pero hoy por fin han confirmado el precio del Surface Duo.${'\n'} 
        En su presentación (octubre del año pasado) Panos Panay explicaba que el factor forma y disposición del dispositivo favorecería la creatividad al poder ejecutar dos aplicaciones diferentes a la vez. Pero quedaba saber por cuánto saldría este "móvil", viendo además que los dispositivos plegables no son de momento nada económicos...`,
        autor: 'ANNA MARTÍ',
        imagen: 'https://i.blogs.es/294622/surface-duo-00/1366_2000.jpg',
        fecha: new Date(2020, 7, 12),
        categoria: 'MÓVILES'
      },
      {
        id: 13,
        titulo: 'Hay un antepasado arcaico sin identificar escondido en el ADN de muchos humanos modernos: tras las huellas genéticas de H. erectus',
        texto: `El ADN antiguo es el equivalente genético de un enorme trastero en la que con los siglos y milenios se han ido acumulando cachivaches, cacharros y trastos viejos. Por eso, resulta tan útil rebuscar en él. Así hemos encontrado los restos que en nuestro linaje genético dejaron neandertales o devinsonianos. De hecho, hemos encontrado otra cosa.${'\n'}
        Escondido en los genomas de humanos antiguos, un grupo de investigadores han detectado un antepasado no identificado. Es decir, han encontrado restos genéticos que, siendo directo y sin ambages, no pueden etiquetarse con ningún nombre, ni adscribirse a ninguna subespecie humana conocida. ¿Quién se esconde en el genoma?...`,
        autor: 'JAVIER JIMÉNEZ',
        imagen: 'https://i.blogs.es/ee2130/eugene-zhyvchik-xjy-7gtc38o-unsplash/1366_2000.jpg',
        fecha: new Date(2020, 7, 11),
        categoria: 'CIENCIA'
      },
      {
        id: 14,
        titulo: 'Disney pisa a fondo la moto de luz de "Tron 3" adjudicándole director y con Jared Leto de protagonista',
        texto: `Pese a la confirmación hace unas semanas de que 'Tron', la radical y revolucionaria película de ciencia-ficción de Disney, tendría tercera parte, faltaba algo más de sustancia en esa noticia que verificara que, efectivamente, la productora se había puesto manos a la obra. Al fin y al cabo, la entrega previa, 'Tron: Legacy', había funcionado estupendamente en taquilla (170 millones de dólares de presupuesto, 400 de recaudación), pero desastres financieros como 'Tomorrowland' -y, en menor medida, 'Un pliegue en el tiempo'- habían dado al traste con el proyecto.${'\n'}
        Sin embargo, 'Tron' es una de las más icónicas películas de imagen real de Disney, influyente hasta extremos difíciles de cuantificar tanto en lo argumental (dónde estaría 'Matrix' sin 'Tron') como en lo estético (con toda la moda del synthwave, 'Tron' resulta más moderna ahora que en el momento de su estreno), así que no es raro que Disney insista. Para ello, ya tiene un protagonista adjudicado, Jared Leto (que, por cierto, filtró el título 'Tron: Ares' en un tweet que luego borró), el polémico Joker de 'Suicide Squad'...`,
        autor: 'JOHN TONES',
        imagen: 'https://i.blogs.es/117b77/tron_legacy_sequel-0/1366_2000.jpg',
        fecha: new Date(2020, 7, 11),
        categoria: 'CINE Y TV'
      }

    ]
  }



  agregarPost(post: Post): void {
    const arrTemp = JSON.parse(localStorage.getItem("posts"));
    arrTemp.push(post);
    localStorage.setItem("posts", JSON.stringify(arrTemp));
  }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {

      if (localStorage.getItem("posts") == null) {
        localStorage.setItem("posts", JSON.stringify(this.arrPost));
      }
      resolve(JSON.parse(localStorage.getItem("posts")));
      reject('ERROR: No se han podido recuperar los posts');
    });
  }

  getPostsByCategoria(cat: string): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const arrTemp = JSON.parse(localStorage.getItem("posts"));
      resolve(arrTemp.filter(post => post.categoria === cat));
      reject(`ERROR: No se han podido obtener los posts de la categoria ${cat}`);
    });
  }

  getPostById(id: number): Promise<Post> {
    return new Promise((resolve, reject) => {
      const arrTemp = JSON.parse(localStorage.getItem("posts"));
      resolve(arrTemp[id]);
      reject(`ERROR: No se han podido obtener el post con id ${id}`);
    });
  }
}
