import { Injectable } from '@angular/core';
import { IEmployees } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employee: IEmployees[] = [
    { id: '1', name: '加班君', skill: ['加班快樂!'] },
    { id: '2', name: '耍廢君', skill: ['上班耍廢'] },
  ];

  constructor() {}

  getStaff(id: IEmployees['id']): IEmployees | null {
    const staffArr = this.employee.filter((item) => item.id === id);
    if (staffArr && staffArr.length > 0) {
      return staffArr[0];
    }
    return null;
  }

  getStaffs(): IEmployees[] {
    return this.employee;
  }
}
