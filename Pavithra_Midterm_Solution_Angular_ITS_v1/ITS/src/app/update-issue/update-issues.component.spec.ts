import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIssuesComponent } from './update-issues.component';

describe('UpdateIssuesComponent', () => {
  let component: UpdateIssuesComponent;
  let fixture: ComponentFixture<UpdateIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateIssuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
