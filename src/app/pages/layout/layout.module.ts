import { LayoutComponent } from './layout.component';
import { RestablecerPasswordComponent } from './../restablecer-password/restablecer-password.component';
import { PrestamosComponent } from './../prestamos/prestamos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { SolicitudesComponent } from '../solicitudes/solicitudes.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LayoutComponent,
    SolicitudesComponent,
    PrestamosComponent,
    RestablecerPasswordComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ]
})
export class LayoutModule { }
