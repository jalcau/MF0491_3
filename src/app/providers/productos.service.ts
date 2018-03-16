import { Injectable } from '@angular/core';
import {Producto} from '../model/producto';
import {MOCKS_PRODUCTOS} from '../providers/moks.productos'
import { element } from 'protractor';
@Injectable()
export class ProductosService {
  

  constructor() {
    console.log('ProductosService constructor');
   }
   /** 
   * Retorna todos los productos que tenemos en Stock
  */
 getAll():Producto[]{
  console.log('ProductosService getAll');
  let productos:Producto[] = [];
  let producto;
  let jsonData = JSON.parse(MOCKS_PRODUCTOS.stocks);
  jsonData.forEach( element => {
      
    producto = new Producto( 
                       
                      element.nombre, 
                      element.foto,  
                      element.precio,
                      element.precio_unidad,                  
                      element.oferta,
                      element.precio_oferta,
                      element.cantidad
                                                            
                      );

    productos.push(producto);

});

return productos;
}
}









