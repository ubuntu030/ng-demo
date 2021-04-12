import { Component, OnInit } from '@angular/core';

import { Itodo } from '../todo';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  todos: Itodo[] = [];

  constructor() {}

  ngOnInit(): void {}

  add(dscptn: Itodo['dscptn']): void {
    this.todos.push({
      id: new Date().getTime().toString(),
      dscptn: dscptn,
    });
  }

  delete({ id }: Itodo): void {
    this.todos.map((item): any => {
      if (item.id !== id) {
        return item;
      }
    });
  }
}
