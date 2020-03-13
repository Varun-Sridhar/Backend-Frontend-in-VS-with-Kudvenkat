import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeCountComponent } from './employee/employeeCount.component';
import { ScoreListComponent } from './score/scoreList.component';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, EmployeeCountComponent, ScoreListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
