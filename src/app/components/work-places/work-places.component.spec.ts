import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPlacesComponent } from './work-places.component';

describe('WorkPlacesComponent', () => {
  let component: WorkPlacesComponent;
  let fixture: ComponentFixture<WorkPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkPlacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
