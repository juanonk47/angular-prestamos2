import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraPageOutRoutingModule } from './calculadora-page-out-routing.module';
import { CalculadoraPageOutComponent } from './calculadora-page-out.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

import {MatNativeDateModule} from '@angular/material/core';
import { TablePagosComponent } from 'src/app/components/table-pagos/table-pagos.component';
import { SolicitudPrestamoComponent } from 'src/app/components/solicitud-prestamo/solicitud-prestamo.component';
import { RegistroUsuarioComponent } from 'src/app/components/registro-usuario/registro-usuario.component';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    CalculadoraPageOutComponent,
    TablePagosComponent,
    SolicitudPrestamoComponent,
    RegistroUsuarioComponent
  ],
  imports: [
    CommonModule,
    CalculadoraPageOutRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatDialogModule,
    MatGridListModule
  ]
})
export class CalculadoraPageOutModule { }
