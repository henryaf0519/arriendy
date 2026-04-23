import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  lucideMail,
  lucideMessageCircleMore,
  lucidePhone,
} from '@ng-icons/lucide';

type FooterSection = 'producto' | 'soporte' | 'seguridad' | null;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, NgIconComponent],
  viewProviders: [
    provideIcons({ lucideMessageCircleMore, lucidePhone, lucideMail }),
  ],
})
export class FooterComponent {
  activeSection: FooterSection = null;

  toggleFooterSection(section: FooterSection): void {
    // Si ya está abierta, la cierra. Si no, abre la nueva.
    this.activeSection = this.activeSection === section ? null : section;
  }
}
