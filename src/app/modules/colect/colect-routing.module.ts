import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColectComponent } from './colect/colect.component';

const routes: Routes = [
  { path: '', component: ColectComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColectRoutingModule { }
