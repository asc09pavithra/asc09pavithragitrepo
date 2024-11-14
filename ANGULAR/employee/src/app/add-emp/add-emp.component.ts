import { Component,OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { ActivatedRoute, Router} from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-emp',
 // standalone: true,
  //imports: [],
  templateUrl: './add-emp.component.html',
  styleUrl: './add-emp.component.css'
})
export class AddEmpComponent implements OnInit {
  // addForm!: FormGroup;
  id: number = 0;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.employeeService.getEmployeeById(this.id).subscribe(searchedEmployee => { this.employee = searchedEmployee; }, error => console.log(error));
    }

    createEmployee(): void {
      this.employeeService.createEmployee(this.employee).subscribe(createEmployee => { console.log(createEmployee) }, error => console.log(error));
      this.router.navigate(['/employees']);
    }

}










  