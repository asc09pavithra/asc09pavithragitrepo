import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIssusesComponent } from './add-issuses.component';

describe('AddIssusesComponent', () => {
  let component: AddIssusesComponent;
  let fixture: ComponentFixture<AddIssusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddIssusesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIssusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
