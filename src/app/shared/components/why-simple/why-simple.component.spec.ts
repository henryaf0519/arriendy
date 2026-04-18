import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhySimpleComponent } from './why-simple.component';

describe('WhySimpleComponent', () => {
  let component: WhySimpleComponent;
  let fixture: ComponentFixture<WhySimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhySimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhySimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
