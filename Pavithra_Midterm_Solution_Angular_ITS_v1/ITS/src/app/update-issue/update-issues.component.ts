import { Component, OnInit } from '@angular/core';
import { Issue } from '../model/issue.model';
import { IssueeService } from '../service/issue.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-issues',
 // standalone: true,
  //imports: [],
  templateUrl: './update-issues.component.html',
  styleUrl: './update-issues.component.css'
})
export class UpdateIssuesComponent implements OnInit {
  id: number = 0;
  issue: Issue = new Issue();
  constructor(private issueService: IssueeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.issue = new Issue();
    this.issueService.getIssueById(this.id)
    .subscribe(searchedIssue => {
      this.issue = searchedIssue;
    }, error => console.log(error));
  }

  updateIssue() : void {
    this.issueService.updateIssue(this.id, this.issue)
    .subscribe(updatedIssue => {console.log(updatedIssue)}, error => console.log(error));
    this.router.navigate(['/issues']);
  }
}


