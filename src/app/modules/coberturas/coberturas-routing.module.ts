import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoberturasComponent } from './coberturas.component';

const routes: Routes = [
  { path: '', component: CoberturasComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoberturasRoutingModule { }
