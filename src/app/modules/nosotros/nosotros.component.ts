import { Component } from '@angular/core';
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss'
})
export class NosotrosComponent {

}
