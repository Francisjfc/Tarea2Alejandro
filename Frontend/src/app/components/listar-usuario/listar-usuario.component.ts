import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent {

  usuarios : Usuario[] = []

  constructor(private usuarioService : UsuarioService) {

    this.getAllUsuarios();

  }

  getAllUsuarios() {

    this.usuarioService.getUsuario().subscribe({

      next : res => {

        console.log(res)
        this.usuarios = res

      },
      error : err => console.log(err)

    })

  }

}
