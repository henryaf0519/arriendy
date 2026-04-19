import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideMail, lucideMessageCircleMore, lucidePhone } from '@ng-icons/lucide';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [NgIconComponent], 
  viewProviders: [provideIcons({ lucideMessageCircleMore, lucidePhone, lucideMail })],
})
export class FooterComponent {
}
