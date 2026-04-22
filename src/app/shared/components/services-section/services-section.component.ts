import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent {
  @Output() scrollToHero = new EventEmitter<void>();

  onQuoteClick() {
    this.scrollToHero.emit();
  }

}
