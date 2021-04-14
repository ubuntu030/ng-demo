import { Injectable } from '@angular/core';
import { IEmployees } from './employee';

import { EMPLOYEES } from './mock-employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees = EMPLOYEES;

  constructor() {}

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
}
