import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'progreso',
    loadChildren: './progreso/progreso.module#ProgresoPageModule'
  },
  {
    path: 'end-game/:id',
    loadChildren: './end-game/end-game.module#EndGamePageModule'
  },  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
