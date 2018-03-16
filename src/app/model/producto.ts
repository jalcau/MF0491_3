export class Producto{
    nombre : string;
    foto: string;
    precio:number;
    precio_unidad:string;
    oferta: boolean;
    precio_oferta:number;
    constructor(nombre:string,foto:string, precio:number, precio_unidad:string, oferta:boolean, precio_oferta:number){
        this.nombre=nombre;
        this.foto=foto;
        this.precio=precio;
        this.precio_oferta=precio_oferta;
        this.precio_unidad=precio_unidad;
        this.oferta=oferta;
        if ( oferta ){
            this.precio_oferta=precio_oferta
        }
        else {
            this.precio_oferta=precio;
        }
        

    }
}






