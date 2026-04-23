import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { ScrollRevealDirective } from 'src/app/directives/scroll-reveal.directive';

// 1. La definición del tipo va FUERA de la clase
type PlanType = 'esencial' | 'balance' | 'cero';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PlansComponent {
  @ViewChild('plansSlider') swiperRef!: ElementRef;
  @Output() scrollToHero = new EventEmitter<void>();
  // 2. Ahora puedes usarlo para tipar tu propiedad
  public planSeleccionado: PlanType = 'balance';

  selectPlan(plan: PlanType): void {
    this.planSeleccionado = plan;

    // Creamos un mapa para saber a qué índice corresponde cada plan
    const planIndices: Record<PlanType, number> = {
      esencial: 0,
      balance: 1,
      cero: 2,
    };

    const index = planIndices[plan];

    // Accedemos a la instancia de swiper y movemos el slide
    if (this.swiperRef && this.swiperRef.nativeElement.swiper) {
      this.swiperRef.nativeElement.swiper.slideTo(index);
    }
  }
  onQuoteClick() {
    this.scrollToHero.emit();
  }

  ngAfterViewInit() {
    const swiperEl = this.swiperRef.nativeElement;

    const swiperParams = {
      slidesPerView: 1.3, // Importante para ver un borde del siguiente plan en mobile
      centeredSlides: true,
      spaceBetween: 2,
      initialSlide: 1, // Para que empiece en el plan "Balance" (el de la mitad)
      breakpoints: {
        1024: {
          slidesPerView: 3,
          centeredSlides: false,
          spaceBetween: 32,
          allowTouchMove: false,
        },
      },
    };

    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  }
}
