import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductosService } from '../providers/productos.service';
import { NgModel } from '@angular/forms';
import { ProductoCarrito } from '../model/producto_carrito'
@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {
  @Input() index: Number;
  stocks: Array<Producto>;
  cantidad: number;
  searchText: string;
  carrito: ProductoCarrito[];
  productoCarrito: ProductoCarrito;
  indice: number;
  cantCarrito: number;
  total: number;


  constructor(public productosService: ProductosService) {
    console.log("SupermercadoComponent Constructor");
    this.stocks = new Array<Producto>();
    this.cantidad = 1;
    this.carrito = [];
    this.cantCarrito = 0;
    this.total = 0;
  }

  ngOnInit() {
    console.log("SupermercadoComponent ngOnInit");
    this.stocks = this.productosService.getAll();

  }

  sumar(productoSelec: Producto, index) {
    //this.numero=this.numero+1;
    productoSelec.cantidad = productoSelec.cantidad + 1;
    console.log("%s %s", productoSelec.cantidad, index);

  }
  restar(productoSelec: Producto) {
    if (productoSelec.cantidad <= 1) {
      productoSelec.cantidad = 1;
    }
    else {
      productoSelec.cantidad = productoSelec.cantidad - 1;
      console.log("%s", productoSelec.cantidad);

    }
   

    }

    sumarProducto(event){
      console.log('SupermercadoComponent.incremCarrito(%o)', event.producto);

      this.aumCarrito(event.producto, 1);
      this.cantCarrito++;
    }
    aumCarrito(producto: Producto, unidades: number): void {
      
      if (producto.oferta) {
        this.total +=+ producto.precio_oferta * unidades;
      }
      else{
      this.total += + producto.precio * unidades;
      }
      // tslint:disable-next-line:no-console
      console.debug(`
        subtotal: ${producto.precio * unidades} \n
       
        total: ${this.total}
      `);
    }
    restarProducto(event){
      console.log('SupermercadoComponent.decremCarrito(%o)', event);

      this.dismCarrito(event.producto, 1);
      this.cantCarrito--;
    }

    dismCarrito(producto: Producto, unidades: number): void {
     
  
      console.log("%s",unidades);
      if (producto.oferta) {
        this.total -= producto.precio_oferta * unidades;
      }
      else{
        this.total -= producto.precio * unidades;
      }
      
      
      console.debug(`
        subtotal: ${producto.precio * unidades} \n
        total: ${this.total}
      `);
    }
   
    EliminarProducto(event): void {
      console.log('SupermercadoComponent.deleteFromCart(%o)', event.producto);
  
      this.dismCarrito(event.producto, event.unidades);
      this.cantCarrito -= 1 * event.unidades;
    }
  

  IrCarrito(productoSelec: Producto): void {
    // console.log('SupermercadoComponent.irCarrito(%o),event');
    this.productoCarrito = new ProductoCarrito(productoSelec, productoSelec.cantidad)
    console.log('Producto carrito %o', this.productoCarrito);
    // this.productoCarrito=producto;
    //this.indice=index;
    
    this.carrito.push(this.productoCarrito);
    this.cantCarrito += 1 * productoSelec.cantidad;
    if(productoSelec.oferta)
    {
      this.total +=+ productoSelec.precio_oferta * productoSelec.cantidad;
      productoSelec.cantidad = 1;
    }
    else{   
    this.total += + productoSelec.precio * productoSelec.cantidad;
    productoSelec.cantidad = 1;
  }
  }

}
