import { Component } from '@angular/core';

// 1. La definición del tipo va FUERA de la clase
type PlanType = 'esencial' | 'balance' | 'cero';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {
  // 2. Ahora puedes usarlo para tipar tu propiedad
  public planSeleccionado: PlanType = 'balance';

  selectPlan(plan: PlanType): void {
    this.planSeleccionado = plan;
  }
}