import { Component } from '@angular/core';
import { FaqSectionComponent } from "src/app/shared/components/faq-section/faq-section.component";

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [FaqSectionComponent],
  templateUrl: './support.component.html',
  styleUrl: './support.component.scss'
})
export class SupportComponent {

}
