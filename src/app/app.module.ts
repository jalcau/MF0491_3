import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProductosService } from './providers/productos.service';
import { AppComponent } from './app.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';
 import {FormsModule} from  '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SupermercadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
