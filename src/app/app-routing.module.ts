import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EstadosPage } from './pages/estados/estados.page';
import { MunicipiosPage } from './pages/municipios/municipios.page';

const routes: Routes = [
  { path: '', redirectTo: 'estados', pathMatch: 'full' },
  { path: 'estados', loadChildren: () => import('./pages/estados/estados.module').then(m => m.EstadosPageModule) },
  { path: 'municipios/:id/:nome', loadChildren: () => import('./pages/municipios/municipios.module').then(m => m.MunicipiosPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
