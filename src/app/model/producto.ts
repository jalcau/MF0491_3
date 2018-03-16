export class Producto{
    foto: string;
    nombre : string;
    precio:number;
    precio_unidad:string;
    oferta: boolean;
    precio_oferta:number;
    constructor(nombre:string,foto:string, oferta:boolean){
        this.nombre=nombre;
        this.foto=foto;
        this.oferta=oferta;

    }
}






