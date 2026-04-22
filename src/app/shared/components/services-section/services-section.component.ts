import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ScrollRevealDirective } from 'src/app/directives/scroll-reveal.directive';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
})
export class ServicesSectionComponent {
  @Output() scrollToHero = new EventEmitter<void>();

  onQuoteClick() {
    this.scrollToHero.emit();
  }
}
