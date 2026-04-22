import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)
  },
  { 
    path: 'coberturas', 
    loadChildren: () => import('./modules/coberturas/coberturas.module').then(m => m.CoberturasModule) 
  },
  { 
    path: 'nosotros', 
    loadChildren: () => import('./modules/nosotros/nosotros.module').then(m => m.NosotrosModule) 
  },
  { 
    path: 'renovacion', 
    loadChildren: () => import('./modules/renovacion/renovacion.module').then(m => m.RenovacionModule) 
  },
  { 
    path: 'soporte', 
    loadChildren: () => import('./modules/support/support.module').then(m => m.SupportModule) 
  },
  { 
    path: 'registro', 
    loadChildren: () => import('./modules/colect/colect.module').then(m => m.ColectModule) 
  },
  { 
    path: 'estudio', 
    loadChildren: () => import('./modules/study/study.module').then(m => m.StudyModule) 
  },
  { path: '**', redirectTo: '/main' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
      scrollPositionRestoration: 'enabled' 
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
