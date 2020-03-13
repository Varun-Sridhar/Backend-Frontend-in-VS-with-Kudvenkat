"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.selectedEmployeeCountRadioButton = "All";
        this.employees = this._employeeService.getEmployees();
    }
    EmployeeListComponent.prototype.getEmployees = function () {
        this.employees = [
            { code: 'emp1', name: 'Varun', gender: 'Male', annualSalary: 10.9, dateOfBirth: '22/09/1997' },
            { code: 'emp2', name: 'Dilip', gender: 'Male', annualSalary: 3.5, dateOfBirth: '27/07/1998' },
            { code: 'emp3', name: 'Priya', gender: 'Female', annualSalary: 8.0, dateOfBirth: '21/09/1998' },
            { code: 'emp4', name: 'Sanjana', gender: 'Female', annualSalary: 8.4, dateOfBirth: '15/05/1999' },
            { code: 'emp5', name: 'Nandish', gender: 'Male', annualSalary: 15, dateOfBirth: '19/09/1998' }
        ];
    };
    EmployeeListComponent.prototype.addEmployee = function () {
        this.employees.push({ code: 'emp5', name: 'Nandish', gender: 'Male', annualSalary: 15, dateOfBirth: '19/09/1998' });
    };
    EmployeeListComponent.prototype.trackByEmpCode = function (index, employee) {
        return employee.code;
    };
    EmployeeListComponent.prototype.getTotalEmployeesCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getMaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === "Male"; }).length;
    };
    EmployeeListComponent.prototype.getFemaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === "Female"; }).length;
    };
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'employee-list',
            templateUrl: 'app/employee/employeeList.component.html',
            providers: [employee_service_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map