import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-guardar-usuario',
  templateUrl: './guardar-usuario.component.html',
  styleUrls: ['./guardar-usuario.component.css']
})
export class GuardarUsuarioComponent {

  form : FormGroup
  usuario : Usuario = {

    id : 0,
    nombre : '',
    apellidoUno : '',
    apellidoDos : '',
    contrasenia : ''

  }

  constructor(private usuarioService : UsuarioService, private formBuilder : FormBuilder) {

    this.form = this.formBuilder.group({

      nombre : [''],
      apellidoUno : [''],
      apellidoDos : [''],
      contrasenia : ['']

    })

  }

  ngOnInit() {}

  getData() {

    this.usuario.nombre = this.form.get('nombre')?.value
    this.usuario.apellidoUno = this.form.get('apellidoUno')?.value
    this.usuario.apellidoDos = this.form.get('apellidoDos')?.value

    this.usuarioService.guardarUsuario(this.usuario).subscribe({

      next : res => {

        console.log(res)

      }, error : err => {

        console.log(err)

      }

    })

  }

}
