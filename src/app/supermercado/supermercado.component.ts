import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductosService } from '../providers/productos.service';
import { NgModel } from '@angular/forms';
import {ProductoCarrito} from '../model/producto_carrito'
@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {
  @Input() index:Number;
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
    this.carrito=[];
    this.cantCarrito=0;
    this.total=0;
  }

  ngOnInit() {
    console.log("SupermercadoComponent ngOnInit");
    this.stocks = this.productosService.getAll();

  }

  sumar(productoSelec: Producto, index) {
    //this.numero=this.numero+1;
    productoSelec.cantidad = productoSelec.cantidad + 1;
    console.log("%s %s" ,productoSelec.cantidad ,index);

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

  IrCarrito(productoSelec: Producto): void{
   // console.log('SupermercadoComponent.irCarrito(%o),event');
    this.productoCarrito=new ProductoCarrito(productoSelec, productoSelec.cantidad)
    console.log('Producto carrito %o',this.productoCarrito);
   // this.productoCarrito=producto;
    //this.indice=index;
    
    this.carrito.push(this.productoCarrito);
    this.cantCarrito += 1 * productoSelec.cantidad;
    this.total += + productoSelec.precio * productoSelec.cantidad;
    productoSelec.cantidad = 1;
  }

}
