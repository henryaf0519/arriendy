import { Component } from '@angular/core';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})
export class BenefitsComponent {

  servicios = [
    {
      img: 'ownerB.svg',
      titulo: 'Canon de<br>Arrendamiento',
      desc: 'Garantizamos el pago de tu arriendo el día 10 de cada mes, sin importar si tu inquilino se atrasa.'
    },
    {
      img: 'electricity.svg',
      titulo: 'Servicios<br>Públicos',
      desc: 'Cubrimos las facturas pendientes de agua, luz, gas y teléfono que deje el inquilino al desocupar.'
    },
    {
      img: 'administration.svg',
      titulo: 'Cuota de<br>administración',
      desc: 'Garantizamos el pago de tu cuota de administración el día 10 de cada mes, sin importar si tu inquilino se atrasa.'
    },
    {
      img: 'limit.svg',
      titulo: 'Límite de<br>indemnización',
      desc: 'Es el tiempo máximo (ej: 12 o 36 meses) durante el cual asumimos los pagos si el inquilino no cumple.'
    },
    {
      img: 'assistance.svg',
      titulo: 'Asistencia<br>domiciliaria',
      desc: 'Servicios de emergencia 24/7 en plomería, electricidad y cerrajería para el inmueble.'
    },
    {
      img: 'damage.svg',
      titulo: 'Daños y<br>faltantes',
      desc: 'Respaldo económico si el inmueble es devuelto con daños físicos o faltan elementos del inventario.'
    }
  ];

}
