export class Producto{
    nombre : string;
    foto: string;
    precio:number;
    precio_unidad:string;
    oferta: boolean;
    precio_oferta:number;
    constructor(nombre:string,foto:string, precio:number, precio_unidad:string, oferta:boolean, precio_oferta?:number){
        this.nombre=nombre;
        this.foto=foto;
        this.precio_unidad=precio_unidad;
        this.oferta=oferta;
        

    }
}






