import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService{

  private scrollToHeroSource = new Subject<void>();
  private pendingScroll = false;
  
  scrollToHero$ = this.scrollToHeroSource.asObservable();

  triggerScrollToHero() {
  console.log('--- SERVICIO: triggerScrollToHero llamado ---');
  this.pendingScroll = true;
  this.scrollToHeroSource.next();
}

consumeScrollSignal(): boolean {
  console.log('--- SERVICIO: Revisando si hay señal pendiente:', this.pendingScroll);
  if (this.pendingScroll) {
    this.pendingScroll = false;
    return true;
  }
  return false;
}
}
