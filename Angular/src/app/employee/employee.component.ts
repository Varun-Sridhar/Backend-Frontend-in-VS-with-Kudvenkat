import { Component } from '@angular/core';

@Component({
    selector: 'my-employee',
    templateUrl : 'app/employee/employee.component.html'
})
export class EmployeeComponent {
    showDetails: boolean = false;
    columnSpan: number = 2;
    firstname: string = "Varun";
    lastname: string = "Sridhar";
    gender: string = "M";
    age: number = 22;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}