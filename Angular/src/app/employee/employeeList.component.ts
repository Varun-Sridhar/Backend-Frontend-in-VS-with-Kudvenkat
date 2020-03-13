import { Component } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    selector : 'employee-list',
    templateUrl: 'app/employee/employeeList.component.html',
    providers:[EmployeeService]
})
export class EmployeeListComponent {
    employees: IEmployee[];

    selectedEmployeeCountRadioButton: string = "All";

    constructor(private _employeeService: EmployeeService) {
        this.employees = this._employeeService.getEmployees();
    }

    getEmployees(): void {
        this.employees = [
            { code: 'emp1', name: 'Varun', gender: 'Male', annualSalary: 10.9, dateOfBirth: '22/09/1997' },
            { code: 'emp2', name: 'Dilip', gender: 'Male', annualSalary: 3.5, dateOfBirth: '27/07/1998' },
            { code: 'emp3', name: 'Priya', gender: 'Female', annualSalary: 8.0, dateOfBirth: '21/09/1998' },
            { code: 'emp4', name: 'Sanjana', gender: 'Female', annualSalary: 8.4, dateOfBirth: '15/05/1999' },
            { code: 'emp5', name: 'Nandish', gender: 'Male', annualSalary: 15, dateOfBirth: '19/09/1998' }
        ];
    }

    addEmployee(): void {
        this.employees.push({ code: 'emp5', name: 'Nandish', gender: 'Male', annualSalary: 15, dateOfBirth: '19/09/1998'});
    }

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getMaleEmployeesCount(): number {
        return this.employees.filter(e=>e.gender==="Male").length;
    }

    getFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
}