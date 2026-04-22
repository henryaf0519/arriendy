import { Component } from '@angular/core';
import { PartnerEnrollmentComponent } from "src/app/shared/components/partner-enrollment/partner-enrollment.component";
import { InsuranceCalculatorComponent } from "src/app/shared/components/insurance-calculator/insurance-calculator.component";
import { ContactComponent } from "src/app/shared/components/contact/contact.component";

@Component({
  selector: 'app-colect',
  standalone: true,
  imports: [PartnerEnrollmentComponent, InsuranceCalculatorComponent, ContactComponent],
  templateUrl: './colect.component.html',
  styleUrl: './colect.component.scss'
})
export class ColectComponent {

}
