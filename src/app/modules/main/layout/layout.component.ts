import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  goToHero(target: any) {
    // Si 'target' es un componente de Angular, accedemos a su elemento nativo
    const element = target.elementRef ? target.elementRef.nativeElement : target;
    
    element.scrollIntoView({ 
      behavior: 'smooth', // Animación suave
      block: 'start',     // Alinea al inicio del elemento
      inline: 'nearest' 
    });
  }

}
