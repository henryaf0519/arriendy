import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyStepperContainerComponent } from './study-stepper-container.component';

describe('StudyStepperContainerComponent', () => {
  let component: StudyStepperContainerComponent;
  let fixture: ComponentFixture<StudyStepperContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyStepperContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyStepperContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
