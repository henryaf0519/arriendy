import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerEnrollmentComponent } from './partner-enrollment.component';

describe('PartnerEnrollmentComponent', () => {
  let component: PartnerEnrollmentComponent;
  let fixture: ComponentFixture<PartnerEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerEnrollmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
