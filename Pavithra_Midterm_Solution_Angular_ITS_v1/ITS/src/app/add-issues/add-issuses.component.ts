import { Component, OnInit } from '@angular/core';
import { Issue } from '../model/issue.model';
import { IssueeService } from '../service/issue.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-issuses',
  // standalone: true,
  // imports: [],
  templateUrl: './add-issuses.component.html',
  styleUrls: ['./add-issuses.component.css']
})
export class AddIssusesComponent implements OnInit {
  addForm!: FormGroup
  id: number = 0;
  issue: Issue = new Issue();
  constructor(private issueService: IssueeService,
    private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.issueService.getIssueById(this.id).subscribe(searchedIssue => { this.issue = searchedIssue; }, error => console.log(error));
    }

    createIssue(): void {
      this.issueService.createIssue(this.issue).subscribe(createIssue => { console.log(createIssue) }, error => console.log(error));
      this.router.navigate(['/issues']);
    }

}










  


