import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
})
export class AlertModalComponent implements OnInit {
  @ViewChild('childModal') childModalControl!: ModalDirective;

  message = '子模組a預設訊息';

  constructor() {}

  ngOnInit(): void {}

  updateMessage(message: string): void {
    this.message = message;
  }

  show(message?: string): void {
    if (message && message.trim()) {
      this.updateMessage(message);
    }
    this.childModalControl.show();
  }

  hide(): void {
    this.childModalControl.hide();
  }
}
