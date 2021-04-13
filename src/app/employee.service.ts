import { Injectable } from '@angular/core';
import { IEmployees } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employee: IEmployees[] = [
    {
      id: '1',
      name: '加班君',
      skill: ['加班快樂!'],
      detail: '一間扛起一家七口，不加班就無法餬口',
    },
    {
      id: '2',
      name: '耍廢君',
      skill: ['上班耍廢', '看U2'],
      detail: '工作甚麼的不重要，就真的是來交朋友的',
    },
    {
      id: '3',
      name: '小蝦米',
      skill: ['跑腿'],
      detail: '就只是個蝦米..',
    },
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
