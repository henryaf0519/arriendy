import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from './components/hero/hero.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { PlansComponent } from './components/plans/plans.component';
import { PlansCoveragesComponent } from './components/plans-coverages/plans-coverages.component';
import { SuraStatsComponent } from './components/sura-stats/sura-stats.component';
import { DoubtsSectionComponent } from './components/doubts-section/doubts-section.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PeopleComponent } from './components/people/people.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ServicesSectionComponent,
    PlansComponent,
    PlansCoveragesComponent,
    SuraStatsComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    InfoSectionComponent,
    DoubtsSectionComponent,
    BenefitsComponent,
    AboutusComponent,
    PeopleComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    InfoSectionComponent,
    ServicesSectionComponent,
    PlansComponent,
    PlansCoveragesComponent,
    SuraStatsComponent,
    DoubtsSectionComponent,
    BenefitsComponent,
    AboutusComponent,
    PeopleComponent
  ],
})
export class SharedModule {}
