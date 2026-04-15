import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';

register();

@Component({
  selector: 'app-info-section',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './info-section.component.html'
})
export class InfoSectionComponent implements AfterViewInit {
  benefits = [
    { title: 'Solo pagas una vez', desc: 'Para proteger todos los meses de arriendo. (50% de un sólo cánon)', icon: 'assets/imgs/coins.svg' },
    { title: 'No solo aseguras tu ingreso', desc: 'También los Servicios Públicos, la Administración y posibles daños.', icon: 'assets/imgs/shield.svg' },
    { title: 'Asistencia inmediata', desc: 'Soporte para solucionar eventualidades en el inmueble.', icon: 'assets/imgs/tools.svg' },
    { title: 'Tranquilidad total', desc: 'Nos encargamos de todo el proceso legal si es necesario.', icon: 'assets/imgs/coins.svg' },
  ];

  ngAfterViewInit() {
    const swiperEl = document.querySelector('swiper-container');
    
    const swiperParams: SwiperOptions = {
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      
      // --- NUEVAS PROPIEDADES PARA ARREGLAR EL INICIO ---
      initialSlide: 0, // Fuerza a que inicie en el índice 0 (la primera tarjeta)
      observer: true,  // Le dice a Swiper que vigile si Angular agrega nuevas tarjetas
      observeParents: true, // Vigila cambios en el contenedor padre
      // --------------------------------------------------

      effect: 'creative',
      creativeEffect: {
        limitProgress: 2,
        prev: {
          opacity: 0.4,
          scale: 0.85,
          translate: ['-35%', 0, -1],
        },
        next: {
          opacity: 0.4,
          scale: 0.85,
          translate: ['35%', 0, -1],
        },
      },
      // ... (el resto de tu configuración sigue igual)
      navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className} !w-3 !h-3 !bg-gray-300 !opacity-100 !rounded-full !m-0 !relative z-10 transition-all cursor-pointer shadow-[0_0_0_4px_#EDF6F6] [&.swiper-pagination-bullet-active]:!bg-arriendy-teal [&.swiper-pagination-bullet-active]:!w-4 [&.swiper-pagination-bullet-active]:!h-4"></span>`;
        },
      },
    };

    if (swiperEl) {
      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
    }
  }
}