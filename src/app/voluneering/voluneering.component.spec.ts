import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluneeringComponent } from './voluneering.component';

describe('VoluneeringComponent', () => {
  let component: VoluneeringComponent;
  let fixture: ComponentFixture<VoluneeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoluneeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluneeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
