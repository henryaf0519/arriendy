import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-insurance-calculator',
  standalone: true,
  imports: [],
  templateUrl: './insurance-calculator.component.html',
  styleUrl: './insurance-calculator.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InsuranceCalculatorComponent {

  ngOnInit(): void {
    this.loadArriendyScript();
  }

  private loadArriendyScript(): void {
    const scriptId = 'arriendy-widget-script';
    
    // Evitamos cargar el script más de una vez si el componente se destruye y recrea
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://cdn.arriendy.paisasoft.com/quoter/v1/widget.js';
      script.defer = true;
      document.body.appendChild(script);
    }
  }

}
