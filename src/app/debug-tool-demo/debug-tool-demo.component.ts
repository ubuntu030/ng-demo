import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debug-tool-demo',
  templateUrl: './debug-tool-demo.component.html',
  styleUrls: ['./debug-tool-demo.component.scss'],
})
export class DebugToolDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  bugMe(): void {
    throw new Error('bug occuring!');
  }
}
