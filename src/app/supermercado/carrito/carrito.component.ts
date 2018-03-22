import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../model/producto';
import {ProductoCarrito} from '../../model/producto_carrito'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  @Input('productoUnido') productoUnido: ProductoCarrito
  
  carrito: ProductoCarrito[];
  constructor() {
    console.log("Constructor CarritoComponent");
    this.carrito=[];
    this.productoUnido = new ProductoCarrito(new Producto("Producto","",0,"",false,0,1),1)
   }

  ngOnInit() {
    console.log("ngOnInit CarritoComponent");
    this.rellenarCarrito();
    
  }
  rellenarCarrito(){
    this.carrito.push(this.productoUnido);
  }

}
