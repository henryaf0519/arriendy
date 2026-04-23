import { importProvidersFrom, NgModule } from '@angular/core';
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
import { StrategicAllianceComponent } from './components/strategic-alliance/strategic-alliance.component';
import { WhySimpleComponent } from './components/why-simple/why-simple.component';
import { TargetAudienceComponent } from './components/target-audience/target-audience.component';
import { InsuranceHeroComponent } from './components/insurance-hero/insurance-hero.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { InsuranceCalculatorComponent } from './components/insurance-calculator/insurance-calculator.component';
import { PartnerEnrollmentComponent } from './components/partner-enrollment/partner-enrollment.component';
import { ContactComponent } from './components/contact/contact.component';
import { StudyFormComponent } from './components/study-form/study-form.component';
import { StudyStepperContainerComponent } from './components/study-stepper-container/study-stepper-container.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
    
    PlansCoveragesComponent,
    SuraStatsComponent,
    
  ],
  imports: [
    FooterComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    InfoSectionComponent,
    DoubtsSectionComponent,
    BenefitsComponent,
    AboutusComponent,
    PeopleComponent,
    StrategicAllianceComponent,
    WhySimpleComponent,
    TargetAudienceComponent,
    InsuranceHeroComponent,
    FaqSectionComponent,
    InsuranceCalculatorComponent,
    PartnerEnrollmentComponent,
    ContactComponent,
    StudyFormComponent,
    StudyStepperContainerComponent,
    ServicesSectionComponent,
    PlansComponent
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
    PeopleComponent,
    StrategicAllianceComponent,
    WhySimpleComponent,
    TargetAudienceComponent,
    InsuranceHeroComponent,
    FaqSectionComponent,
    InsuranceCalculatorComponent,
    PartnerEnrollmentComponent,
    ContactComponent,
    StudyFormComponent,
    StudyStepperContainerComponent
  ]
})
export class SharedModule {}
