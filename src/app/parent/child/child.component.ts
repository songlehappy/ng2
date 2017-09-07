// import { Component } from '@angular/core';

// @Component({
//     moduleId:module.id,
//     selector:'my-child',
//     templateUrl:'./child.component.html'
// })

// export class ChildComponent{

// }

import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'countdown-timer',
    template: '<p>{{message}}</p>'
})
export class ChildComponent implements OnInit, OnDestroy {

    intervalId = 0;
    message = '';
    seconds = 11;

    clearTimer() { clearInterval(this.intervalId); }

    ngOnInit() { this.start(); }
    ngOnDestroy() { this.clearTimer(); }

    start() { this.countDown(); }
    stop() {
        this.clearTimer();
        this.message = `Holding at T-${this.seconds} seconds`;
    }

    private countDown() {
        this.clearTimer();
        this.intervalId = window.setInterval(() => {
            this.seconds -= 1;
            if (this.seconds === 0) {
                this.message = 'Blast off!';
            } else {
                if (this.seconds < 0) { this.seconds = 10; } // reset
                this.message = `T-${this.seconds} seconds and counting`;
            }
        }, 1000);
    }
}