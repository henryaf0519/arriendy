import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from './components/hero/hero.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, 
    InfoSectionComponent
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    InfoSectionComponent
  ]
})
export class SharedModule { }
