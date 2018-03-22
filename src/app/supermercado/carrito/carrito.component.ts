import { Component, OnInit, Input, Output } from '@angular/core';
import { Producto } from '../../model/producto';
import { ProductoCarrito } from '../../model/producto_carrito'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  @Input('productoUnido') productoUnido: ProductoCarrito;
  @Output() productoSuma = new EventEmitter();
  @Output() productoResta = new EventEmitter();
  @Output() productoEliminado = new EventEmitter();
  carrito: ProductoCarrito[];
  constructor() {
    console.log("Constructor CarritoComponent");
    this.carrito = [];
    this.productoUnido = new ProductoCarrito(new Producto("Producto", "", 0, "", false, 0, 1), 1)
  }

  ngOnInit() {
    console.log("ngOnInit CarritoComponent");
    this.rellenarCarrito();

  }
  rellenarCarrito() {


    this.carrito.push(this.productoUnido);
  }
  contieneCarrito(productocarrito: Producto): number {
    let indice = -1;
    this.carrito.forEach((element, index) => {
      if (element.producto === productocarrito) {
        indice = index;

      }
    })
    return indice;

  }
  aumUnidad(event) {

    this.productoUnido.unidades++;
    console.log('ProductoComponent.aumUnidad(%s)', this.productoUnido.unidades);
    this.productoSuma.emit(
      {
      'producto': this.productoUnido.producto,
      'unidades': this.productoUnido.unidades
    });
  }

  decUnidad(event){
    if ( this.productoUnido.unidades > 1) {
      this.productoUnido.unidades--;
      console.log('ProductoComponent.decUnidad(%s)', this.productoUnido.unidades);

      this.productoResta.emit({
        'producto': this.productoUnido.producto,
        'unidades': this.productoUnido.unidades
      });
    } else {
      this.productoUnido.unidades==1;
    }
  }
  borrarDelCarro(productoCarrito:ProductoCarrito):void{
    const index = this.contieneCarrito(productoCarrito.producto);
    if ( index !== -1 ) {
      // Borrar de la lista del carrito
      this.carrito.splice(index, 1);
      this.productoEliminado.emit({
        'producto': productoCarrito,
        'unidades':this.productoUnido.unidades
      })
  }
  }

}
