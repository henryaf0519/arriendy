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
  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://cdn.arriendy.paisasoft.com/quoter/v1/widget.js';
    
    // Al cargar el script, esperamos un momento y ocultamos el loader
    script.onload = () => {
      setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.style.display = 'none';
      }, 1500); // Ajusta el tiempo según la velocidad del MFE
    };
    
    script.defer = true;
    document.body.appendChild(script);
  } else {
    // Si el script ya existía (ej. volviste a la página), ocultamos rápido
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.style.display = 'none';
    }, 500);
  }
}

}
