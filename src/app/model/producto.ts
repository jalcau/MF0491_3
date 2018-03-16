export class Producto{
    nombre : string;
    foto: string;
    precio:number;
    precio_unidad:string;
    oferta: boolean;
    precio_oferta:number;
    cantidad: number;
    constructor(nombre:string,foto:string, precio:number, precio_unidad:string, oferta:boolean, precio_oferta:number, cantidad:number){
        this.nombre=nombre;
        this.foto=foto;
        this.precio=precio;
        this.precio_oferta=precio_oferta;
        this.precio_unidad=precio_unidad;
        this.oferta=oferta;
        this.cantidad=cantidad
        if ( oferta ){
            this.precio_oferta=precio_oferta
        }
        else {
            this.precio_oferta=precio;
        }
        

    }
}






