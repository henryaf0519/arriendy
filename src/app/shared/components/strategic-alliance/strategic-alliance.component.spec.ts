import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicAllianceComponent } from './strategic-alliance.component';

describe('StrategicAllianceComponent', () => {
  let component: StrategicAllianceComponent;
  let fixture: ComponentFixture<StrategicAllianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategicAllianceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategicAllianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
