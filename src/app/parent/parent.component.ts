import { Component, OnInit, ViewChild } from '@angular/core';

import { AlertModalComponent } from './../alert-modal/alert-modal.component';

import { Itodo } from '../todo';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  @ViewChild(AlertModalComponent) alertModal!: AlertModalComponent;
  todos: Itodo[] = [];

  messageForAlert = '';

  constructor() {}

  ngOnInit(): void {}

  add(dscptn: Itodo['dscptn']): void {
    if (dscptn && dscptn.trim()) {
      this.todos.push({
        id: new Date().getTime().toString(),
        dscptn,
      });
    }
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

  showModal(message?: string): void {
    this.alertModal.show(message);
  }

  hideModal(): void {
    this.alertModal.hide();
  }
}
