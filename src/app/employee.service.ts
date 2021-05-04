import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, pluck, tap } from 'rxjs/operators';
import { IEmployees } from './employee';

import { EMPLOYEES } from './mock-employee';

const API_URL = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees = EMPLOYEES;

  constructor(private http: HttpClient) {}

  getStaff(id: IEmployees['id']): IEmployees | undefined {
    const staffArr = this.employees.filter((item) => item.id === id);
    if (staffArr && staffArr.length > 0) {
      return staffArr[0];
    }
    return undefined;
  }

  getStaffs(): IEmployees[] {
    return this.employees;
  }

  getEmployees(): Observable<any> {
    const self = this;
    return self.http.get(API_URL + 'ngDemoEmployees').pipe(
      tap((result) => console.log(result)),
      pluck('result'),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
