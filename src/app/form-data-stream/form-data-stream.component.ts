import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-data-stream',
  templateUrl: './form-data-stream.component.html',
  styleUrls: ['./form-data-stream.component.scss'],
})
export class FormDataStreamComponent implements OnInit {
  name = '';

  constructor() {}

  ngOnInit(): void {}

  changeName(newName: string): void {
    this.name = newName;
  }
}
