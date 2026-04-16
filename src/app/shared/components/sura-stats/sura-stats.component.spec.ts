import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuraStatsComponent } from './sura-stats.component';

describe('SuraStatsComponent', () => {
  let component: SuraStatsComponent;
  let fixture: ComponentFixture<SuraStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuraStatsComponent]
    });
    fixture = TestBed.createComponent(SuraStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
