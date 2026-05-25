import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleServices } from './multiple-services';

describe('MultipleServices', () => {
  let component: MultipleServices;
  let fixture: ComponentFixture<MultipleServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleServices],
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
