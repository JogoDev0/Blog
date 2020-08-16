export class Post {

    id: number;
    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    fecha: Date;
    categoria: string;

    //NOTA: He tenido que agregar un id al modelo pq he añadido un componente extra para poder navegar al detalle del post. Para que la navegación fuera correcta, no podía tirar del index del ngFor de blog.component, pq fallaba al filtrar por categoría y te llevaba a un índice del array incorrecto, así que he tenido que complicar un poco el código para que funcionara. Quién me mandará meterme en estos líos jajaja
    constructor(pId: number = 0, pTitulo: string = '', pTexto: string = '', pAutor: string = '',
        pImagen: string = '', pFecha: Date = new Date(), pCategoria: string = '') {

        this.id = pId;
        this.titulo = pTitulo;
        this.texto = pTexto;
        this.autor = pAutor;
        this.imagen = pImagen;
        this.fecha = pFecha;
        this.categoria = pCategoria;
    }
}