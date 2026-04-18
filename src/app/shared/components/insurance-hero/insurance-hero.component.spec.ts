import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceHeroComponent } from './insurance-hero.component';

describe('InsuranceHeroComponent', () => {
  let component: InsuranceHeroComponent;
  let fixture: ComponentFixture<InsuranceHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
