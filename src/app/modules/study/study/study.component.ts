import { Component } from '@angular/core';
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  selector: 'app-study',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './study.component.html',
  styleUrl: './study.component.scss'
})
export class StudyComponent {

}
