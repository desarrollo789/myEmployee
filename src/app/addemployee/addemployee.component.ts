import { Component } from '@angular/core';
import { EmployeeService } from '../services/employeeservice.service';
import { Router } from '@angular/router';
import { Employee } from '../entity/employee';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styles: []
})
export class AddemployeeComponent {
  firstname: string;
  lastname: string;
  age: number;
  designation: string;
  employee: Employee;

  // Service injected in the constructor
  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  // Method to save an employee
  saveEmployee() {
    this.employee = new Employee(this.makeRandomID(), this.firstname, this.lastname, this.age, this.designation);
    this.employeeService.addEmployees(this.employee);
    this.router.navigate(['Employees']);
  }

  // Method to cancel the add operation
  cancelEmployee() {
    this.router.navigate(['Employees']);
  }

  // Creates random id for employee
  makeRandomID(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 10; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
