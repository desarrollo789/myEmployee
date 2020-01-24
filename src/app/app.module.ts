import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';

import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

const routes: Routes = [
  { path: 'Employees', component: EmployeelistComponent },
  { path: 'AddEmployee', component: AddemployeeComponent },
  { path: 'EditEmployee/:id', component: EditemployeeComponent },
  { path: '**', redirectTo: 'Employees' },
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    EmployeedetailComponent,
    AddemployeeComponent,
    EditemployeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    PanelModule,
    CardModule,
    InputTextModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
