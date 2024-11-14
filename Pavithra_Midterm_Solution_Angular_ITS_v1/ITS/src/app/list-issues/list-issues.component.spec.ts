import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIssueComponent } from './list-issues.component';

describe('ListIssuesComponent', () => {
  let component: ListIssueComponent;
  let fixture: ComponentFixture<ListIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListIssueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
