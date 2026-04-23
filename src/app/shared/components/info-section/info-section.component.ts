import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

register();

@Component({
  selector: 'app-info-section',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss'],
})
export class InfoSectionComponent implements AfterViewInit {
  
  benefits = [
    {
      title: 'SÓLO PAGAS UNA VEZ',
      desc: 'Realiza un pago único anual que te brindará cobertura por toda la vigencia del contrato. ¡Sin mensualidades!',
      icon: 'assets/imgs/coins.svg',
    },
    {
      title: 'NO SOLO ASEGURAS TU INGRESO MENSUAL',
      desc: 'También las deudas de servicios públicos, cuotas de administración y posibles daños o faltantes a tu inmueble.',
      icon: 'assets/imgs/coins.svg',
    },
    {
      title: 'OBTIENES ASISTENCIA DOMICILIARIA',
      desc: 'Sura envía especialistas para atender emergencias de plomería, electricidad, cerrajería, vidrios y vigilancia.',
      icon: 'assets/imgs/coins.svg',
    },
    {
      title: 'ACOMPAÑAMIENTO LEGAL INCLUIDO',
      desc: 'Verificación de contrato y orientación legal en derecho civil, familiar, penal, administrativo y laboral.',
      icon: 'assets/imgs/coins.svg',
    },
    {
      title: 'PROTECCIÓN ANTE DAÑOS Y FALTANTES',
      desc: 'Garantía de que no asumirás pérdidas por daños o faltantes en los elementos fijos de tu propiedad al recibirla.',
      icon: 'assets/imgs/coins.svg',
    },
    {
      title: 'RESTITUCIÓN DEL INMUEBLE',
      desc: 'Sura asume todo el proceso jurídico o extrajudicial para recuperar tu propiedad sin límite de meses.',
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
          prev: { opacity: 0, scale: 0.85, translate: ['-100%', 0, -1] },
          next: { opacity: 0.4, scale: 0.85, translate: ['50%', 0, -1] },
        },
      };

      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
    }, 150); // Tiempo de seguridad
  }
}
