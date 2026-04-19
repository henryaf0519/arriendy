import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss'
})
export class FaqSectionComponent {
  faqOpen: number | null = 0; // El primero abierto por defecto

  faqs = [
    { 
      q: '¿QUÉ ES ARRIENDY?', 
      a: 'Somos canal oficial de Sura en seguros de arrendamiento. Ofrecemos confianza, respaldo y soluciones ágiles que protegen el patrimonio de propietarios, inquilinos, inmobiliarias y empresas.' 
    },
    { 
      q: 'ADEMÁS DEL CANON DE ARRENDAMIENTO ¿QUÉ MÁS CUBRE EL SEGURO?', 
      a: 'También recibirás el valor correspondiente a cuotas de administración y servicios públicos domiciliarios, además de asesoría legal y beneficios extras.' 
    },
    { 
      q: '¿HASTA CUÁNDO EL SEGURO RESPONDE POR MI ARRIENDO?', 
      a: 'Si tu inquilino dejó de pagar, Sura te acompaña hasta que recuperes el inmueble o hasta que la mora total llegue a 36 meses. Recibirás el canon de arrendamiento según las coberturas que hayas seleccionado.' 
    },
    { 
      q: '¿EN QUÉ CONSISTE EL ACOMPAÑAMIENTO JURÍDICO?', 
      a: 'Brindamos un acompañamiento jurídico 360°, que cubre desde la revisión inicial del contrato hasta la gestión integral de un eventual siniestro.' 
    },
    { 
      q: '¿QUÉ PASA SI OCURREN DAÑOS EN EL INMUEBLE?', 
      a: 'La cobertura extra de “Daños y Faltantes” cubre el valor de los bienes del inventario inicial, excepto deterioro normal como pintura o fisuras.' 
    }
  ];

  toggleFaq(index: number) {
    this.faqOpen = this.faqOpen === index ? null : index;
  }

}
