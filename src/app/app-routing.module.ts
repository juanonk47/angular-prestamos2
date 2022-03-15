import { CalculadoraPageOutComponent } from './pages/calculadora-page-out/calculadora-page-out.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [{
  path: '',
  redirectTo: '/out',
  pathMatch: 'full',
},
{
  path: 'out',
  loadChildren: () => import('./pages/calculadora-page-out/calculadora-page-out.module').then(m => m.CalculadoraPageOutModule)
},
{
  path: 'login',
  loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
},
{
  path: 'home',
  loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
