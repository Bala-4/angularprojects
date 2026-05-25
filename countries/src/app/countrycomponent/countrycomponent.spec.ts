import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Countrycomponent } from './countrycomponent';

describe('Countrycomponent', () => {
  let component: Countrycomponent;
  let fixture: ComponentFixture<Countrycomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Countrycomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Countrycomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
