import { Component } from '@angular/core';
type PlanType = 'esencial' | 'balance' | 'cero';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {

    public planSeleccionado: PlanType = 'balance';

  selectPlan(plan: PlanType): void {
    this.planSeleccionado = plan;
  }

}
