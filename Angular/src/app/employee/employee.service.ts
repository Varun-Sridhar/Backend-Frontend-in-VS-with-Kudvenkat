import { Injectable } from '@angular/core';
import { IEmployee } from './employee';

@Injectable()
export class EmployeeService {
    getEmployees(): IEmployee[] {
        return [
            { code: 'emp1', name: 'Varun', gender: 'Male', annualSalary: 10.9, dateOfBirth: '22/09/1997' },
            { code: 'emp2', name: 'Dilip', gender: 'Male', annualSalary: 3.5, dateOfBirth: '27/07/1998' },
            { code: 'emp3', name: 'Priya', gender: 'Female', annualSalary: 8.0, dateOfBirth: '21/09/1998' },
            { code: 'emp4', name: 'Sanjana', gender: 'Female', annualSalary: 8.4, dateOfBirth: '15/05/1999' },
            { code: 'emp5', name: 'Nandish', gender: 'Male', annualSalary: 15, dateOfBirth: '19/09/1998' }
        ];
    }
}