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
  styleUrl: './people.component.scss',
})
export class PeopleComponent {
  personas: PersonaPunto[] = [
    {
      id: 1,
      nombre: '',
      cargo: 'Análisis de Riesgos',
      email: '',
      top: '45%', // Mujer extremo izquierdo
      left: '9%',
    },
    {
      id: 2,
      nombre: '',
      cargo: 'Asesoría Legal',
      email: '',
      top: '40%', // Mujer chaleco oscuro
      left: '19%',
    },
    {
      id: 3,
      nombre: '',
      cargo: 'Estrategia Digital',
      email: '',
      top: '45%', // Hombre camisa negra
      left: '31%',
    },
    {
      id: 4,
      nombre: 'Maria Victoria Rios',
      cargo: 'Gerente',
      email: 'mvrios@sura.com.co',
      top: '40%', // Un poco más arriba en la misma zona central
      left: '45%',
    },
    {
      id: 5,
      nombre: '',
      cargo: 'Estrategia',
      email: '',
      top: '40%', // Mujer blazer negro
      left: '62%',
    },
    {
      id: 6,
      nombre: 'Maria Angélica Pugliese',
      cargo: 'Directora Comercial',
      email: 'mapugliese@sura.com.co',
      top: '45%', // Posición central (vestido blanco)
      left: '78%',
    },
    {
      id: 7,
      nombre: '',
      cargo: 'Tecnología',
      email: '',
      top: '45%', // Mujer con gafas
      left: '93%',
    },
  ];

  personaActiva: PersonaPunto | null = null;

  mostrarInfo(persona: PersonaPunto) {
    this.personaActiva = persona;
  }

  ocultarInfo() {
    this.personaActiva = null;
  }
}
