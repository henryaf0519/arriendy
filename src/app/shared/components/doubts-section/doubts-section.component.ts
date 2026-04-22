import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { RouterModule } from '@angular/router';

// ¡ESTO ES CLAVE! Igual que en tu ejemplo funcional
register();

@Component({
  selector: 'app-doubts-section',
  standalone: true,
  templateUrl: './doubts-section.component.html',
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class  DoubtsSectionComponent implements AfterViewInit {
  @ViewChild('swiperRef') swiperRef!: ElementRef;
  @ViewChild('nextBtn') nextBtn!: ElementRef;
  @ViewChild('prevBtn') prevBtn!: ElementRef;
  @ViewChild('paginationRef') paginationRef!: ElementRef;
  // Tus 4 tarjetas originales
  baseBenefits = [
    {
      title: '¿QUÉ RESPALDO ADICIONAL RECIBO?',
      desc: 'Te acompañamos durante todo el proceso. Evaluación del inquilino, revisión jurídica, gestión en caso de siniestro.',
      avatar: 'assets/imgs/avatar.svg', // Reemplaza con tu ruta real
      icon: '', // Ya no usaremos el icono grande lateral
    },
    {
      title: '¿QUÉ ES ARRIENDY?',
      desc: 'Somos canal oficial de SURA en seguros de arrendamiento. Ofrecemos respaldo, confianza y soluciones ágiles que protegen el patrimonio de propietarios, inquilinos e inmobiliarias, con seguros diseñados para dar tranquilidad.',
      avatar: 'assets/imgs/avatar1.svg', // Reemplaza con tu ruta real
      icon: '',
    },
    {
      title: '¿QUÉ CUBRE EL SEGURO?',
      desc: 'Coberturas principales:\n• Canon de arrendamiento\n• Cuotas de administración\n• Servicios públicos',
      avatar: 'assets/imgs/avatar2.svg', // Reemplaza con tu ruta real
      icon: '',
    }
  ];

  benefits = [...this.baseBenefits, ...this.baseBenefits];
  activeDotIndex = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    const swiperEl = this.swiperRef.nativeElement;

    const swiperParams: SwiperOptions = {
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      initialSlide: 0,
      observer: true,
      observeParents: true,
      effect: 'creative',
      creativeEffect: {
        limitProgress: 2,
        prev: { opacity: 0.4, scale: 0.85, translate: ['-62%', 0, -1] },
        next: { opacity: 0.4, scale: 0.85, translate: ['62%', 0, -1] },
      },
      // Vinculamos a las referencias locales, no a clases globales
      navigation: {
        nextEl: this.nextBtn.nativeElement,
        prevEl: this.prevBtn.nativeElement,
      },
      on: {
        slideChange: (swiper) => {
          // Si realIndex es 0 o 3 -> activa el punto 0
          // Si realIndex es 1 o 4 -> activa el punto 1
          // Si realIndex es 2 o 5 -> activa el punto 2
          this.activeDotIndex = swiper.realIndex % 3;
          this.cdr.detectChanges(); 
        }
      }
    };

    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
    
  }
  goToSlide(index: number) {
    this.swiperRef.nativeElement.swiper.slideToLoop(index);
  }
}
