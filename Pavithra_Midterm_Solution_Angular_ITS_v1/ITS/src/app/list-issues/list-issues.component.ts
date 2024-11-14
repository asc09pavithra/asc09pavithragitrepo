import { Component, OnInit } from '@angular/core';
import { Issue } from '../model/issue.model';
import { IssueeService } from '../service/issue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-issues',
  //standalone: true,
  //imports: [],
  templateUrl: './list-issues.component.html',
  styleUrls: ['./list-issues.component.css']
})
export class ListIssueComponent implements OnInit {
  searchTerm: string = '';

  issues: Issue[] = [];
  filterIssues: Issue[] =[];
  issueService: IssueeService;

  constructor(issueService: IssueeService, private  router: Router) {
    this.issueService = issueService;
  }
  ngOnInit(): void {
    this.loadIssue();
    this.issueService.getIssues().subscribe((issueData) => {
      this.issues = issueData
    });
  }

  loadIssue(): void { 
    this.issueService.getIssues().subscribe((issueData) => {
      this.issues = issueData;
      this.filterIssues = [...this.issues];
    });
  }

  deleteIssue(toDeleteIssue: Issue): void {
    if (toDeleteIssue.id !== undefined) {
      this.issueService.deleteIssue(toDeleteIssue.id).subscribe((issue) => {
        this.issues = this.issues.filter(issue => issue.id !== toDeleteIssue.id);
        this.filterIssues = this.filterIssues.filter(issue => issue.id !== toDeleteIssue.id);
      });
    }
  }

  
  updateIssue(issueId: number) : void {
    if(issueId !== undefined) {
      this.router.navigate(['update',issueId]);
    }
    else {
      console.log("Issue Id is undefined");
    }
  }
  
  filterIssue(): void {
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase(); 
      this.filterIssues = this.issues.filter(issue =>
      (this.issues = this.issues.filter(issue =>
        (issue.id && issue.id.toString().includes(term)) ||
        (issue.title && issue.title.toLowerCase().includes(term)) ||
        (issue.description && issue.description.toLowerCase().includes(term)) ||
        (issue.priority && issue.priority.toLowerCase().includes(term))||
        (issue.status && issue.status.toLowerCase().includes(term))||
        (issue.assignee && issue.assignee.toLowerCase().includes(term))
      )));
  


      
  } else {
      this.filterIssues = [...this.issues];
    }
  
  }
}



