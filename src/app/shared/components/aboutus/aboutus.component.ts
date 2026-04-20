import { Component } from '@angular/core';
type PlanType = 'esencial' | 'balance' | 'cero';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss',
})
export class AboutusComponent {
  public planSeleccionado: PlanType = 'balance';

  selectPlan(plan: PlanType): void {
    this.planSeleccionado = plan;
  }

  valores = [
    {
      icon: 'assets/imgs/tech.svg', // O el nombre que tengas
      texto:
        'TECNOLOGÍA<br>para brindar soluciones oportunas.',
    },
    {
      icon: 'assets/imgs/trust.svg',
      texto:
        'La CONFIANZA que hace posible relaciones de valor.',
    },
    {
      icon: 'assets/imgs/closeness.svg',
      texto:
        'Y la CERCANÍA de los que son buenos amigos, socios y aliados.',
    },
  ];
}
