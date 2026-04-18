import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, signal, ChangeDetectionStrategy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-sura-stats',
  templateUrl: './sura-stats.component.html',
  styleUrls: ['./sura-stats.component.scss'],
  // Opcional: Mejora aún más el rendimiento
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class SuraStatsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('statsSection') statsSection!: ElementRef;

  // Definimos la Signal con los datos iniciales
  public stats = signal([
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
  ]);

  private observer: IntersectionObserver | null = null;
  private incrementSub: Subscription | null = null;
  private hasAnimated = false;

  ngAfterViewInit(): void {
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
    const duration = 2000;
    const start = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const easeOut = progress * (2 - progress);

      // Actualizamos la Signal para que Angular pinte el cambio
      this.stats.update(items => items.map(stat => {
        const val = Math.floor(easeOut * stat.target);
        return { 
          ...stat, 
          current: val, 
          displayNumber: val.toLocaleString('es-CO') 
        };
      }));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        this.startPeriodicIncrement();
      }
    };

    requestAnimationFrame(step);
  }

  private startPeriodicIncrement(): void {
    this.incrementSub = interval(3000).subscribe(() => {
      this.stats.update(items => items.map(stat => {
        const nextVal = stat.current + 1;
        return { 
          ...stat, 
          current: nextVal, 
          target: stat.target + 1, 
          displayNumber: nextVal.toLocaleString('es-CO') 
        };
      }));
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.incrementSub?.unsubscribe();
  }
}