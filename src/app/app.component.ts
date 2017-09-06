import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    moduleId: module.id,
    templateUrl:'./app.component.html',
    styleUrls:['./app.component.css']
    //   template: `
    //     <h1>{{title}}</h1>
    //     <my-heroes></my-heroes>
    //   `
})
export class AppComponent {
    title = 'Tour of Heroes';
}