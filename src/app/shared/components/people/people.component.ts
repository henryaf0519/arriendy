import { Component } from '@angular/core';

interface PersonaPunto {
  id: number;
  nombre: string;
  cargo: string;
  email: string;
  top: string; // Posición vertical en %
  left: string; // Posición horizontal en %
}

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent {

  personas: PersonaPunto[] = [
    { id: 1, nombre: 'María Victoria Ríos', cargo: 'Gerente Comercial', email: 'mvrios@arriendy.com.co', top: '45%', left: '48%' },
    { id: 2, nombre: 'Andrés Castro', cargo: 'Director de Tecnología', email: 'acastro@arriendy.com.co', top: '40%', left: '32%' },
    { id: 3, nombre: 'Lina Montoya', cargo: 'Líder de Operaciones', email: 'lmontoya@arriendy.com.co', top: '55%', left: '20%' },
    { id: 4, nombre: 'Carlos Ruiz', cargo: 'Soporte al Cliente', email: 'cruiz@arriendy.com.co', top: '35%', left: '76%' },
    { id: 5, nombre: 'Elena Gómez', cargo: 'Analista de Riesgos', email: 'egomez@arriendy.com.co', top: '50%', left: '10%' },
    { id: 6, nombre: 'Julián Meza', cargo: 'Asesor Legal', email: 'jmeza@arriendy.com.co', top: '42%', left: '62%' }
  ];

  personaActiva: PersonaPunto | null = null;

  mostrarInfo(persona: PersonaPunto) {
    this.personaActiva = persona;
  }

  ocultarInfo() {
    this.personaActiva = null;
  }

}
