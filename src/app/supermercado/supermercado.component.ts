import { Component, OnInit } from '@angular/core';
import {Producto} from '../model/producto';
import {ProductosService} from '../providers/productos.service';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {
  stocks : Array<Producto>;
  numero:number;
  searchText:string;
  

  constructor(public productosService:ProductosService) {
    console.log("SupermercadoComponent Constructor");
    this.stocks= new Array<Producto>();



   }

  ngOnInit() {
    console.log("SupermercadoComponent ngOnInit");
    this.stocks= this.productosService.getAll();

  }

  sumar(){
    this.numero=0;
    this.numero=this.numero +1;
    console.log("%i",this.numero);
  }

}
