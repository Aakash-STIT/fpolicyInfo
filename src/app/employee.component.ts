import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'emp-des',
    template: `<html><body><h1>WELCOME TO EMPLOYEES DASHBOARD</h1></body></html>`,
    styles: [`h1{text-align: center}
            body{ background-color:yellow}`]
})

export class Employee implements OnInit {


    constructor() { }

    ngOnInit() {
    }

    
}
      
