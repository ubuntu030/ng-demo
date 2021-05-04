import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EmployeeService } from '../employee.service';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, pluck, tap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.scss'],
})
export class RxjsDemoComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}
  tableList = [];
  tableList$ = new BehaviorSubject<any[]>([]);

  sortSate = {
    type: '',
    sort: 1,
  };
  ngOnInit(): void {
    const self = this;
  }

  getData(): void {
    const self = this;
    self.employeeService.getEmployees().subscribe({
      next: (data) => {
        console.log(data);
        self.tableList$.next(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  filterDataList(key: string): void {
    const self = this;
    self.tableList$
      .pipe(map((val) => self.sortTable(val, key)))
      .subscribe((data) => {
        console.log(data);
      });
  }

  sortTable(data: any, key: string): void {
    const sortSate = this.sortSate;
    if (sortSate.type === key) {
      sortSate.sort = -sortSate.sort;
    } else {
      sortSate.type = key;
    }
    const newData = data.sort((a: any, b: any) => {
      if (a[key] < b[key]) {
        return sortSate.sort;
      }
      if (a[key] > b[key]) {
        return -sortSate.sort;
      }
      return 0;
    });
    return newData;
  }
}
