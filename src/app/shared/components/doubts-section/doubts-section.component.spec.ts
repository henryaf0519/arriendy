import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubtsSectionComponent } from './doubts-section.component';

describe('DoubtsSectionComponent', () => {
  let component: DoubtsSectionComponent;
  let fixture: ComponentFixture<DoubtsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoubtsSectionComponent]
    });
    fixture = TestBed.createComponent(DoubtsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
