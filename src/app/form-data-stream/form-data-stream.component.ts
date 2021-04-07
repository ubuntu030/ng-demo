import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-data-stream',
  templateUrl: './form-data-stream.component.html',
  styleUrls: ['./form-data-stream.component.scss'],
})
export class FormDataStreamComponent implements OnInit {
  name: string = '';

  constructor() {}

  ngOnInit(): void {}
}
