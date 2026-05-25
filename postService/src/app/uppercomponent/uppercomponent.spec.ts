import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uppercomponent } from './uppercomponent';

describe('Uppercomponent', () => {
  let component: Uppercomponent;
  let fixture: ComponentFixture<Uppercomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uppercomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Uppercomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
