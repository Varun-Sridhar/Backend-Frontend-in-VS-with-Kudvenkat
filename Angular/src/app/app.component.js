"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageHeader = "Employee Details";
        this.imageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
        this.isDisabled = true;
        this.input = "Default Input";
    }
    AppComponent.prototype.onClick = function () {
        console.log('The Button was Cicked');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: /*`<div> <h1> Hello {{pageHeader}} </h1>
                            <img [src] = 'imageUrl'/>
                            <my-employee> </my-employee>
                            <button [disabled] = 'isDisabled'>Click Me</button>
                      </div>`
                      `<button on-click='onClick()'>Click Karo</button>`
                      `<my-employee></my-employee>`
                        `<div> Name : <input [value]='input' (input)='input=$event.target.value'/>
                         <br/>
                         You Entered : {{input}}
                         </div>
                        `*/ "<score-list> </score-list>"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map