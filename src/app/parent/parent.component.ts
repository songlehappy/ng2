// import { Component } from '@angular/core';

// @Component({
//     moduleId:module.id,
//     selector:'my-parent',
//     templateUrl:'./parent.component.html'
// })

// export class ParentComponent{

// }

import { AfterViewInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
    selector: 'countdown-parent-vc',
    template: `
  <h3>Countdown to Liftoff (via ViewChild)</h3>
  <button (click)="start()">Start</button>
  <button (click)="stop()">Stop</button>
  <div class="seconds">{{ seconds() }}---111</div>
  <countdown-timer></countdown-timer>
  `
})
export class ParentComponent implements AfterViewInit {

    @ViewChild(ChildComponent)
    private timerComponent: ChildComponent;

    seconds() { return 0; }

    ngAfterViewInit() {
        // Redefine `seconds()` to get from the `ChildComponent.seconds` ...
        // but wait a tick first to avoid one-time devMode
        // unidirectional-data-flow-violation error
        
        // setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
        
        var that = this;
        setTimeout(function () {
            return that.seconds = function () {
                return that.timerComponent.seconds;
            };
        }, 0);

    }

    start() { this.timerComponent.start(); }
    stop() { this.timerComponent.stop(); }
}