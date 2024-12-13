import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/admins-service';
import { admins } from '../models/admins.model';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  admin: admins = {
    id: '',
    name: '',
    email: '',
    password: '',
    phone_number: '',
    created_at: ''
  };

  adminToUpdate: admins | null = null;  
  adminsList: admins[] = [];
  filteredAdminsList: admins[] = [];
  emailTaken = false;
  phoneTaken = false;
  nameError = false;
  passwordError = false;
  emailInvalid = false;
  phoneInvalid = false;
  registrationError = false;
  registrationSuccess = false;
  searchTerm: string = '';

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit() {
    this.loadAdmins();
  }

  loadAdmins() {
    this.employeeService.getadmins().subscribe({
      next: (admins) => {
        this.adminsList = admins;
        this.filterAdmins();
      },
      error: (err) => {
        console.error('Error fetching admins:', err);
      }
    });
  }

  filterAdmins() {
    const term = this.searchTerm.toLowerCase();
    this.filteredAdminsList = this.adminsList.filter(admin => 
      admin.name.toLowerCase().includes(term) || 
      admin.email.toLowerCase().includes(term) || 
      admin.phone_number.includes(term)
    );
  }

  onSubmit() {
    this.validateName();
    this.validatePassword();
    if (!this.admin.id) {  
      this.validateEmail();
      this.validatePhone();
    }

    this.admin.created_at = new Date().toISOString().slice(0, 19).replace("T", " ");

    if (!this.emailTaken && !this.phoneTaken && !this.nameError && !this.passwordError && !this.emailInvalid && !this.phoneInvalid) {
      if (this.admin.id === '') {  // New registration
        this.employeeService.addadmins(this.admin).subscribe({
          next: (response) => {
            this.registrationSuccess = true;
            console.log('Registration successful:', response);
            alert('Registration successful');
            this.resetForm();
            this.loadAdmins();
          },
          error: (err) => {
            this.registrationError = true;
            console.error('Registration failed:', err);
          }
        });
      } else {  // Update
        this.employeeService.updateadmins(this.admin).subscribe({
          next: (response) => {
            console.log('Update successful:', response);
            alert('Update successful');
            this.loadAdmins();
            this.resetForm();
            this.adminToUpdate = null;
          },
          error: (err) => {
            this.registrationError = true;
            console.error('Update failed:', err);
          }
        });
      }
    }
  }

  ngOnChanges() {
    this.filterAdmins();
  }
  

  validateEmail() {
    if (!this.admin.email.includes('@gmail.com')) {
      this.emailInvalid = true;
    } else {
      this.emailInvalid = false;
    }
    this.emailTaken = this.adminsList.some(admin => admin.email === this.admin.email);
  
  }

  validatePhone() {
    const phonePattern = /^\d{10}$/;
    this.phoneInvalid = !phonePattern.test(this.admin.phone_number);
    this.phoneTaken = this.adminsList.some(admin => admin.phone_number === this.admin.phone_number);
  
  }

  validateName() {
    const namePattern = /^[A-Za-z ]+$/;
    this.nameError = !namePattern.test(this.admin.name);
  }

  validatePassword() {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    this.passwordError = !passwordPattern.test(this.admin.password);
  }

  resetForm() {
    this.admin = {
      id: '',
      name: '',
      email: '',
      password: '',
      phone_number: '',
      created_at: ''
    };
    this.emailTaken = false;
    this.phoneTaken = false;
    this.nameError = false;
    this.passwordError = false;
    this.emailInvalid = false;
    this.phoneInvalid = false;
    this.registrationError = false;
    this.registrationSuccess = false;
  }

  back() {
    this.router.navigateByUrl('navbar');
  }


  editAdmin(admin: admins) {
    this.adminToUpdate = { ...admin };  
    this.admin = { ...admin };  
  }

  deleteAdmin(adminId: string) {
    this.employeeService.deleteadmins(adminId).subscribe({
      next: (response) => {
        console.log('Admin deleted:', response);
        this.loadAdmins();
      },
      error: (error) => {
        console.error('Error deleting admin:', error);
      }
    });
  }
}

