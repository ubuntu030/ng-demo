import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { Itodo } from '../todo';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() todos: Itodo[] = [];
  // 將 todoEvent溢於該元件屬性上
  @Output() todoEvent = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  delete(id: Itodo['id']): void {
    if (id) {
      this.todoEvent.emit({ id });
    }
  }
}
