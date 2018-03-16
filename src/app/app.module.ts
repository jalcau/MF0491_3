import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProductosService } from './providers/productos.service';
import { AppComponent } from './app.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';


@NgModule({
  declarations: [
    AppComponent,
    SupermercadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
