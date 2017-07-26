import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

// ngOnInit is called right after the directive's data-bound properties
// have been checked for the first time, and before any of its children
// have been checked. It is invoked only once when the directive is instantiated.
// interface OnInit {
// ngOnInit(): void
// }
export class AddEmployeeComponent implements OnInit {
  title; subtitle: string;

  constructor() {
     this.title = 'Employee Information';
     this.subtitle = 'Enter fields below';
  }

  ngOnInit() {
  }

}
