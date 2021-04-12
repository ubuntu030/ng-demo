import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { Itodo } from '../todo';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() todos: Itodo[] = [];

  constructor() {}

  ngOnInit(): void {}
}
