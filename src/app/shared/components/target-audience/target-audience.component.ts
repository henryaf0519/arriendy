import { Component } from '@angular/core';

@Component({
  selector: 'app-target-audience',
  standalone: true,
  imports: [],
  templateUrl: './target-audience.component.html',
  styleUrl: './target-audience.component.scss'
})
export class TargetAudienceComponent {

  public perfiles = [
  {
    icon: 'owner.svg',
    titulo: 'Propietarios',
    desc: 'Protegemos tu patrimonio y aseguramos tu renta mensual. Recibe tu dinero a tiempo, sin importar si tu inquilino se retrasa.'
  },
  {
    icon: 'key.svg',
    titulo: 'Inquilinos',
    desc: 'Facilitamos el proceso de tu estudio de arrendamiento para que estés listo y apliques con arrendatarios o inmobiliarias.'
  },
  {
    icon: 'people.svg',
    titulo: 'Empresas',
    desc: 'Cierra negocios más rápido, reduce riesgos operativos y ofrece beneficios a tus colaboradores y accede a los beneficios de Empresas Sura.'
  }
];

}
