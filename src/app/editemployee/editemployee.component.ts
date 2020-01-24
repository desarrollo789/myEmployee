import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../entity/employee';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from '../services/employeeservice.service';
import { Router } from '@angular/router/';

@Component({
  templateUrl: './editemployee.component.html',
})
export class EditemployeeComponent implements OnInit {

  employee: Employee;

  // Services injected in constructor
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  // Initializes variables
  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');
    // this.employee = this.employeeService.getEmployee(id);
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   const id = +params.get('id');
    //   const idstring = id.toString();
    //   this.employee = this.employeeService.getEmployee(idstring);
    // });
    const id = this.route.snapshot.params['id'];
    this.employee = this.employeeService.getEmployee(id);
  }

  // Method to update and employee
  updateEmployee() {
    this.employeeService.updateEmployee(this.employee);
    this.router.navigate(['Employees']);
  }

  // Method to cancel update employee operation
  cancelEmployee() {
    this.router.navigate(['Employees']);
  }
}
