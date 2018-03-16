import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../model/producto';

@Pipe({name: 'filterProductos'})
export class FilterProductos implements PipeTransform {

  transform(items: Producto[], searchText: string): Producto[] {  

    //si no hay recetas retornar vacio
    if (!items) return [];
    console.log('FilterProductos: \nmodo=%s', searchText);

    let productosResultado= items.slice();

  



    //De los que quedan filtramos por texto si hay
    if (!searchText) {
      return productosResultado;
    } else {
      searchText = searchText.toLowerCase();
      let busqueda = '';
      return productosResultado.filter(it => {
        busqueda = it.nombre;
        busqueda = busqueda.toLowerCase();
        return busqueda.includes(searchText);
      });
    }
  }

}
