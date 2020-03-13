import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
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
                `*/
            `<score-list> </score-list>`
})
export class AppComponent {
    pageHeader: string = "Employee Details";
    imageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
    isDisabled = true;
    input: string = "Default Input";

    onClick(): void {
        console.log('The Button was Cicked');
    }
}