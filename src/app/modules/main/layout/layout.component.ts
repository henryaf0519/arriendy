import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollService } from 'src/app/services/scroll-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  @ViewChild('hero', { static: false }) heroElement!: ElementRef;
  private scrollSub!: Subscription;

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    console.log('4. LAYOUT: ngOnInit iniciado');

    // Revisar si venimos de otra página
    const hasSignal = this.scrollService.consumeScrollSignal();
    console.log('5. LAYOUT: ¿Había señal pendiente al cargar?:', hasSignal);

    if (hasSignal) {
      this.scrollToHero();
    }

    // Escuchar por si ya estamos en la página
    this.scrollSub = this.scrollService.scrollToHero$.subscribe(() => {
      console.log('EVENTO: Recibido por suscripción (Subject)');
      this.scrollToHero();
    });
  }

  goToHero(target: any) {
    // Si 'target' es un componente de Angular, accedemos a su elemento nativo
    const element = target.elementRef
      ? target.elementRef.nativeElement
      : target;

    element.scrollIntoView({
      behavior: 'smooth', // Animación suave
      block: 'start', // Alinea al inicio del elemento
      inline: 'nearest',
    });
  }

 scrollToHero() {
  setTimeout(() => {
    if (this.heroElement) {
      const element = this.heroElement.nativeElement;
      const offset = 80; // Espacio que quieres dejar arriba (en píxeles)
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // Desplazamiento suave
      });
    }
  }, 400);
}

  ngOnDestroy() {
    if (this.scrollSub) this.scrollSub.unsubscribe();
  }
}
