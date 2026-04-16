import { Component } from '@angular/core';

@Component({
  selector: 'app-sura-stats',
  templateUrl: './sura-stats.component.html',
  styleUrls: ['./sura-stats.component.scss']
})
export class SuraStatsComponent {

  public stats = [
    {
      number: '+51.000',
      title: 'Propietarios e Inversionistas',
      subtitle: 'protegidos',
      isHighlighted: true
    },
    {
      number: '+88.000',
      title: 'Contratos de arrendamiento',
      subtitle: 'asegurados',
      isHighlighted: false
    }
  ];

}
