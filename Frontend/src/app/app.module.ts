import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { GuardarUsuarioComponent } from './components/guardar-usuario/guardar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarUsuarioComponent,
    GuardarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
