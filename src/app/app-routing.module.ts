import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'progreso',
    loadChildren: './pages/progreso/progreso.module#ProgresoPageModule'
  },
  {
    path: 'end-game/:id',
    loadChildren: './pages/end-game/end-game.module#EndGamePageModule'
  },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  {
    path: '',
    loadChildren: './pages/inicio/inicio.module#InicioPageModule'
  },
  { path: 'jugar', loadChildren: './pages/jugar/jugar.module#JugarPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
