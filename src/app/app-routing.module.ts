import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'estados', pathMatch: 'full' },
  {
    path: 'estados',
    loadChildren: () => import('./pages/estados/estados.module').then(m => m.EstadosPageModule)
  },
  {
    path: 'municipios/:id/:nome',
    loadChildren: () => import('./pages/municipios/municipios.module').then(m => m.MunicipiosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
