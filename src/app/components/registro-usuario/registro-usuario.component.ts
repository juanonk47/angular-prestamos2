import { UsuarioService } from './../../services/usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { switchMap } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent implements OnInit {

  @Output() returnSolicitud = new EventEmitter<boolean>();

  form = new FormGroup({
    nombre: new FormControl(null,[Validators.required]),
    telefono: new FormControl(null, [Validators.required]),
    correo: new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required])
  })
  constructor(private services: UsuarioService, private authServices: AuthServiceService) { }

  ngOnInit(): void {
  }

  back(){
    this.returnSolicitud.emit(true);
  }

  handleButtonRegister(){
    this.services.create_user({...this.form.value})
    .pipe(
      switchMap(() => {
        return this.authServices.Login({...this.form.value})
      })
    )
    .subscribe()
  }

}
