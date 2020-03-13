"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.getEmployees = function () {
        return [
            { code: 'emp1', name: 'Varun', gender: 'Male', annualSalary: 10.9, dateOfBirth: '22/09/1997' },
            { code: 'emp2', name: 'Dilip', gender: 'Male', annualSalary: 3.5, dateOfBirth: '27/07/1998' },
            { code: 'emp3', name: 'Priya', gender: 'Female', annualSalary: 8.0, dateOfBirth: '21/09/1998' },
            { code: 'emp4', name: 'Sanjana', gender: 'Female', annualSalary: 8.4, dateOfBirth: '15/05/1999' },
            { code: 'emp5', name: 'Nandish', gender: 'Male', annualSalary: 15, dateOfBirth: '19/09/1998' }
        ];
    };
    EmployeeService = __decorate([
        core_1.Injectable()
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map