import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFacilityComponent } from './our-facility.component';

describe('OurFacilityComponent', () => {
  let component: OurFacilityComponent;
  let fixture: ComponentFixture<OurFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurFacilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
