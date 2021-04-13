import { Component, OnInit } from '@angular/core';

import { IEmployees } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss'],
})
export class RoutingComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}
  staffs: IEmployees[] = [];

  ngOnInit(): void {
    this.getStaffs();
  }

  getStaffs(): void {
    this.staffs = this.employeeService.getStaffs();
  }
}
