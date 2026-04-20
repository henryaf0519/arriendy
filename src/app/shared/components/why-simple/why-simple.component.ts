import { Component } from '@angular/core';

@Component({
  selector: 'app-why-simple',
  standalone: true,
  imports: [],
  templateUrl: './why-simple.component.html',
  styleUrl: './why-simple.component.scss'
})
export class WhySimpleComponent {
   beneficios = [
    {
      titulo: 'Procesos claros, sin vueltas',
      desc: 'Odiamos la letra pequeña tanto como tú. Te hablamos claro desde el inicio.'
    },
    {
      titulo: 'Acompañamiento real',
      desc: 'Tecnología sí, pero con humanos detrás listos para ayudarte si tienes dudas.'
    },
    {
      titulo: 'Respuesta rápida',
      desc: 'El tiempo es dinero. Evaluamos perfiles y emitimos pólizas a la velocidad que necesitas.'
    }
  ];


}
