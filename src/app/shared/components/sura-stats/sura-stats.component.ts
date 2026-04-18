import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-sura-stats',
  templateUrl: './sura-stats.component.html',
  styleUrls: ['./sura-stats.component.scss']
})
export class SuraStatsComponent implements AfterViewInit, OnDestroy {
  // Referencia al contenedor principal para detectar el scroll
  @ViewChild('statsSection') statsSection!: ElementRef;

  public stats = [
    {
      target: 51000,
      current: 0,
      displayNumber: '0',
      title: 'Propietarios e Inversionistas',
      subtitle: 'protegidos',
      isHighlighted: true
    },
    {
      target: 88000,
      current: 0,
      displayNumber: '0',
      title: 'Contratos de arrendamiento',
      subtitle: 'asegurados',
      isHighlighted: false
    }
  ];

  private observer: IntersectionObserver | null = null;
  private incrementSub: Subscription | null = null;
  private hasAnimated = false;

  ngAfterViewInit(): void {
    // Configurar el observer para disparar la animación cuando se vea el 30% del componente
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animateNumbers();
        }
      },
      { threshold: 0.3 } 
    );

    if (this.statsSection) {
      this.observer.observe(this.statsSection.nativeElement);
    }
  }

  private animateNumbers(): void {
    const duration = 2000; // Duración de la animación inicial en ms
    const start = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      
      // Función ease-out para que frene suavemente al llegar al target
      const easeOut = progress * (2 - progress);

      this.stats.forEach(stat => {
        stat.current = Math.floor(easeOut * stat.target);
        // Formatear localmente para mantener el separador de miles con punto
        stat.displayNumber = stat.current.toLocaleString('es-CO');
      });

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Una vez termina, iniciamos el contador perpetuo
        this.startPeriodicIncrement();
      }
    };

    requestAnimationFrame(step);
  }

  private startPeriodicIncrement(): void {
    // Usar RxJS para incrementar cada 3 segundos
    this.incrementSub = interval(3000).subscribe(() => {
      this.stats.forEach(stat => {
        stat.current += 1;
        stat.target += 1;
        stat.displayNumber = stat.current.toLocaleString('es-CO');
      });
    });
  }

  ngOnDestroy(): void {
    // Limpieza estricta de memoria
    this.observer?.disconnect();
    this.incrementSub?.unsubscribe();
  }
}