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
      dscptn,
    });
  }

  delete(id: Itodo['id']): void {
    const newTodo = this.todos.filter((item) => item.id !== id);
    this.todos = newTodo;
  }

  catchEventEmit(event: any): void {
    if (event && event.id) {
      this.delete(event.id);
    }
  }
}
