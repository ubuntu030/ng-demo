import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { IEmployees } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.scss'],
})
export class StaffDetailComponent implements OnInit {
  staff: IEmployees | undefined;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getStaff();
  }

  getStaff(): void {
    const self = this;
    // 根據路由設定的參數取值 ('detail/:id')
    const id = self.route.snapshot.paramMap.get('id');
    if (id) {
      self.staff = self.employeeService.getStaff(id);
    }
  }
}
