import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EmployeeService } from '../employee.service';

import { Observable, throwError } from 'rxjs';
import { catchError, pluck, tap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.scss'],
})
export class RxjsDemoComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}
  tableList = [];

  ngOnInit(): void {
    const self = this;
  }

  getData(): void {
    const self = this;
    self.employeeService.getEmployees().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
