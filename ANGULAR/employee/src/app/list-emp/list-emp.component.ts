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
  searchTerm: string = '';

  employees!: Employee[]; // array of Employee objects
  filterEmployees: Employee[] =[];
  employeeService: EmployeeService;

  constructor(employeeService: EmployeeService, private  router: Router) {
    this.employeeService = employeeService;
  }
  ngOnInit(): void {
    this.loadEmployee();
    this.employeeService.getEmployees().subscribe((employeeData) => {
      this.employees = employeeData
    });
  }
  // Purpose : To delete an employee
  // Input : Employee object
  loadEmployee(): void { 
    this.employeeService.getEmployees().subscribe((employeeData) => {
      this.employees = employeeData;
      this.filterEmployee();
    });
  }

  deleteEmployee(toDeleteEmployee: Employee): void {
    if (toDeleteEmployee.id !== undefined) {
      // deleting the employee from the list
      this.employeeService.deleteEmployee(toDeleteEmployee.id!).subscribe((employee) => {
        this.employees = this.employees.filter(employee => employee.id !== toDeleteEmployee.id);
        this.filterEmployees = this.filterEmployees.filter(employee => employee.id !== toDeleteEmployee.id);
      });
    }
  }

  
  updateEmployee(employeeId: number| undefined) : void {
    if(employeeId !== undefined) {
      this.router.navigate(['update',employeeId]);
    }
    else {
      console.log("Employee Id is undefined");
    }
  }
  
  filterEmployee(): void {
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase(); 
      this.filterEmployees = this.employees.filter(employee =>// Make search term lowercase for case-insensitive comparison
      this.employees = this.employees.filter(Employee =>
        (Employee.id && Employee.id.toString().includes(term)) ||
        (Employee.name && Employee.name.toLowerCase().includes(term)) ||
        (Employee.salary && Employee.salary.toString().includes(term))
      ));
    } else {
      // If no search term, reload the full customer list
      this.filterEmployees = [...this.employees];
    }
  }
}



