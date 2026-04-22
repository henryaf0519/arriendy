import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColectRoutingModule } from './colect-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ColectRoutingModule,
    SharedModule
  ]
})
export class ColectModule { }
