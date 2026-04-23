import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ScrollRevealDirective } from 'src/app/directives/scroll-reveal.directive';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
})
export class ServicesSectionComponent {
@Output() scrollToHero = new EventEmitter<void>();
  @ViewChild('plansSwiper') swiperRef!: ElementRef;

  onQuoteClick() {
    this.scrollToHero.emit();
  }

  ngAfterViewInit() {
    // Usamos setTimeout para asegurar que el DOM esté listo
    setTimeout(() => {
      const swiperEl = this.swiperRef.nativeElement;

      const swiperParams = {
        slidesPerView: 1.2,
        centeredSlides: true,
        spaceBetween: 20,
        // En Angular 18/TS, a veces es mejor pasar los objetos de esta forma:
        breakpoints: {
          1024: {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 24,
            allowTouchMove: false,
          },
        },
      };

      // Asignamos los parámetros al elemento
      Object.assign(swiperEl, swiperParams);

      // Inicializamos manualmente
      swiperEl.initialize();
    }, 0);
  }

  
}
