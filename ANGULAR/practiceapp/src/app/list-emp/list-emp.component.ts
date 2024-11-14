import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-emp',
  // standalone: true,
  // imports: [],
  templateUrl: './list-emp.component.html',
  styleUrl: './list-emp.component.css'
})
export class ListEmpComponent implements OnInit {

  employee!: Employee[]; // array of Employee objects
  employeeService: EmployeeService;

  constructor(employeeService: EmployeeService, private  router: Router) {
    this.employeeService = employeeService;
  }
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employeeData) => {
      this.employee = employeeData
    });
  }
  // Purpose : To delete an employee
  // Input : Employee object

  deleteEmployee(toDeleteEmployee: Employee): void {
    if (toDeleteEmployee.id !== undefined) {
      // deleting the employee from the list
      this.employeeService.deleteEmployee(toDeleteEmployee.id).subscribe((employee) => {
        this.employee= this.employee.filter(employee => employee.id !== toDeleteEmployee.id);
      })
    }
  }

  updateEmployee(employeeId: number | undefined): void{
    if (employeeId !== undefined){
      this.router.navigate(['update',employeeId]);
    }
    else{
      console.log("Employee Id is undefined");
    }
  }
  }
