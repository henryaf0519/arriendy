import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

ngOnInit() {
  console.log('Directiva cargada en:', this.el.nativeElement); // <--- Mira la consola del navegador
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      console.log('¿Es visible?:', entry.isIntersecting); // <--- Mira si cambia al hacer scroll
      if (entry.isIntersecting) {
        this.renderer.removeClass(this.el.nativeElement, 'opacity-0');
        this.renderer.addClass(this.el.nativeElement, 'animate-fade-up');
        observer.unobserve(this.el.nativeElement);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(this.el.nativeElement);
}
}