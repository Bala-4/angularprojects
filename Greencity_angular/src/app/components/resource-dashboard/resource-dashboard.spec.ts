import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceDashboard } from './resource-dashboard';

describe('ResourceDashboard', () => {
  let component: ResourceDashboard;
  let fixture: ComponentFixture<ResourceDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourceDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
