import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';

register();

@Component({
  selector: 'app-info-section',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './info-section.component.html',
})
export class InfoSectionComponent implements AfterViewInit {

  benefits = [
    {
      title: 'SÓLO PAGAS UNA VEZ',
      desc: 'Para proteger todos los meses de arriendo. (50% de un sólo cánon)',
      icon: 'assets/imgs/coins.svg',
    },
    {
      title: 'NO SOLO ASEGURAS TU INGRESO MENSUAL',
      desc: 'También los servicios públicos, las cuotas de administración y posibles daños o faltantes.',
      icon: 'assets/imgs/coins.svg',
    },
    {
      title: 'CUENTAS CON ASISTENCIA DOMICILIARIA',
      desc: 'Propietarios e inquilinos acceden a una línea de soporte para solucionar incidentes del inmueble.',
      icon: 'assets/imgs/coins.svg',
    },
    {
      title: 'ACOMPAÑAMIENTO LEGAL INCLUIDO',
      desc: 'Ayudamos a hacer las cosas al derecho con contratos conformes a la ley, para seguridad de propietarios e inquilinos.',
      icon: 'assets/imgs/coins.svg',
    },
    {
      title: 'BENEFICIOS CON INMOBILIARIAS ALIADAS',
      desc: '¿Deseas delegar completamente la administración de tu contrato de arrendamiento? Tenemos una solución para ti.',
      icon: 'assets/imgs/coins.svg',
    },
  ];

  ngAfterViewInit() {
    // Le damos 150ms a Angular para que termine de armar todo el HTML de los *ngFor
    setTimeout(() => {
      // 1. Buscamos el swiper por su clase única
      const swiperEl = document.querySelector('.info-swiper') as any;

      if (!swiperEl) {
        console.error('No se encontró el slider de la sección de info');
        return;
      }

      const swiperParams: SwiperOptions = {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        observer: true,
        observeParents: true,
        // 2. Le decimos a Swiper que use las clases ÚNICAS para este componente
        pagination: {
          el: '.info-pagination',
          clickable: true,
          renderBullet: (index: number, className: string) => {
            return `<span class="${className} !w-[10px] !h-[10px] !bg-[#AEC7CA] !opacity-100 !rounded-full transition-all cursor-pointer shadow-[0_0_0_4px_#EDF6F6] [&.swiper-pagination-bullet-active]:!bg-[#00c0d3]"></span>`;
          },
        },
        navigation: {
          nextEl: '.info-next',
          prevEl: '.info-prev',
        },
        effect: 'creative',
        creativeEffect: {
          limitProgress: 2,
          prev: { opacity: 0.4, scale: 0.85, translate: ['-62%', 0, -1] },
          next: { opacity: 0.4, scale: 0.85, translate: ['62%', 0, -1] },
        },
      };

      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
    }, 150); // Tiempo de seguridad
  }
}