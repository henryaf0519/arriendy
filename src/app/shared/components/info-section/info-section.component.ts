import { Component } from '@angular/core';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss'],
})
export class InfoSectionComponent {
  benefits = [
    { title: 'Solo pagas una vez', desc: '...', icon: 'coins.png' },
    { title: 'No solo aseguras tu ingreso', desc: '...', icon: 'house.png' }
  ];
}
