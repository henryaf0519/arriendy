import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/services/scroll-service.service';

// 1. La definición del tipo va FUERA de la clase
type PlanType = 'esencial' | 'balance' | 'cero';

@Component({
  selector: 'app-plans-coverages',
  templateUrl: './plans-coverages.component.html',
  styleUrls: ['./plans-coverages.component.scss']
})
export class PlansCoveragesComponent {

  constructor(
    private scrollService: ScrollService,
    private router: Router
  ) {}

  onButtonClick() {
    this.scrollService.triggerScrollToHero();
  }
  // 2. Ahora puedes usarlo para tipar tu propiedad
  public planSeleccionado: PlanType = 'balance';

  selectPlan(plan: PlanType): void {
    this.planSeleccionado = plan;
  }

cotizar() {
  console.log('1. BOTÓN: Click en Cotizar');
  this.router.navigate(['/main']).then((navigated) => {
    console.log('2. ROUTER: ¿Navegación exitosa?:', navigated);
    if (navigated) {
      this.scrollService.triggerScrollToHero();
      console.log('3. BOTÓN: Señal enviada al servicio');
    }
  });
}
}