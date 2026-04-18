import { Component } from '@angular/core';
import { InsuranceHeroComponent } from "src/app/shared/components/insurance-hero/insurance-hero.component";

@Component({
  selector: 'app-renovacion',
  standalone: true,
  imports: [InsuranceHeroComponent],
  templateUrl: './renovacion.component.html',
  styleUrl: './renovacion.component.scss'
})
export class RenovacionComponent {

}
