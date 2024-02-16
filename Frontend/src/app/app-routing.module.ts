import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardarUsuarioComponent } from './components/guardar-usuario/guardar-usuario.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';

const routes: Routes = [

  {path: '', component: GuardarUsuarioComponent},
  {path: 'lista-usuarios', component: ListarUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
