import { SolicitudesComponent } from './../solicitudes/solicitudes.component';
import { PrestamosComponent } from './../prestamos/prestamos.component';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestablecerPasswordComponent } from '../restablecer-password/restablecer-password.component';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuardService],
    children: [{
      path: "prestamos",
      component: PrestamosComponent
    },
  {
    path: "solicitudes",
    component: SolicitudesComponent
  },{
    path: "resetpassword",
    component: RestablecerPasswordComponent
  }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
