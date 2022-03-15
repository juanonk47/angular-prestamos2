import { AuthGuardService } from './../../guards/auth-guard.service';
import { CalculadoraPageOutComponent } from './calculadora-page-out.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CalculadoraPageOutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculadoraPageOutRoutingModule { }
