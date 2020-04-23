import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { MainPageComponent } from './main-page/main-page.component';

import { Employee } from './Employee';
import { SearchByNamePipe } from './search-by-name.pipe';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AddEmployeeComponent, EmployeeDeleteComponent, EmployeeDetailsComponent, EmployeeEditComponent, EmployeesListComponent, MainPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
