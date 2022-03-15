import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SolicitudService } from './../../services/solicitud.service';
import { Solicitud } from './../../models/Solicitud';
import { UsuarioService } from './../../services/usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { switchMap } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent implements OnInit {

  @Output() returnSolicitud = new EventEmitter<boolean>();

  @Input() soli: any = {};

  form = new FormGroup({
    nombre: new FormControl(null,[Validators.required]),
    telefono: new FormControl(null, [Validators.required]),
    correo: new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required])
  })
  constructor(private route: Router,private services: UsuarioService, private authServices: AuthServiceService, private servicesSolicitud: SolicitudService) { }

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
        .pipe(
          switchMap(() => {
            return this.servicesSolicitud.create_new_solicitud({fecha: this.formatDate(this.soli.fecha),valor: this.soli.valor})
          })
        )
      }),
    )
    .subscribe(() => {
      this.route.navigate(['/home']);
    }
    )
  }

  formatDate(date: Date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}


}
