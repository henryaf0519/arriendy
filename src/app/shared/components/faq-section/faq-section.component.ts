import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss',
})
export class FaqSectionComponent {
  faqOpen: number | null = 0; // El primero abierto por defecto

  faqs = [
    {
      q: '¿Qué es Arriendy?',
      a: 'Somos canal oficial de SURA en seguros de arrendamiento. Ofrecemos confianza, respaldo y soluciones ágiles que protegen el patrimonio de propietarios, inquilinos, inmobiliarias y empresas.',
    },
    {
      q: 'Además del canon, ¿qué más cubre el seguro?',
      a: 'También podrás cubrir el valor de cuotas de administración y servicios públicos domiciliarios, además de contar con asesoría legal y beneficios extra para tu tranquilidad.',
    },
    {
      q: '¿Hasta cuándo el seguro responde por mi arriendo?',
      a: 'Si tu inquilino deja de pagar, SURA te acompaña hasta recuperar el inmueble o hasta que la mora total llegue a 36 meses, según las coberturas seleccionadas.',
    },
    {
      q: '¿En qué consiste el acompañamiento jurídico?',
      a: 'Brindamos soporte 360° que cubre desde la revisión inicial del contrato hasta la gestión integral de un eventual siniestro, protegiendo siempre los intereses de propietarios e inmobiliarias.',
    },
    {
      q: '¿Qué pasa si ocurren daños en el inmueble?',
      a: 'La cobertura de "Daños y Faltantes" protege los bienes incluidos en el inventario inicial del contrato. No cubre el deterioro normal como pintura, fisuras o humedades.',
    },
    {
      q: '¿Cómo funciona la asistencia domiciliaria?',
      a: 'Puedes solicitar soporte de SURA para incidentes de plomería, electricidad, cerrajería o vidrios externos. Asumiremos los costos según los topes estipulados en tu póliza.',
    },
    {
      q: '¿Cómo se hace una reclamación?',
      a: 'En caso de incumplimiento, puedes radicar tu solicitud a través del formulario en nuestra área de soporte, adjuntando los documentos requeridos para iniciar el proceso.',
    },
    {
      q: '¿Qué debo tener en cuenta al reclamar?',
      a: 'Es vital no recibir pagos del arrendatario ni de terceros una vez radicada la reclamación, ni emitir paz y salvos. Si recibes algún pago posterior, debes informarnos de inmediato.',
    },
  ];

  toggleFaq(index: number) {
    this.faqOpen = this.faqOpen === index ? null : index;
  }
}
