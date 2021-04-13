import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormDataStreamComponent } from './form-data-stream/form-data-stream.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { RoutingComponent } from './routing/routing.component';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    FormDataStreamComponent,
    AlertModalComponent,
    RoutingComponent,
    StaffDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
