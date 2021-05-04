import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormDataStreamComponent } from './form-data-stream/form-data-stream.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { RoutingComponent } from './routing/routing.component';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DebugToolDemoComponent } from './debug-tool-demo/debug-tool-demo.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    FormDataStreamComponent,
    AlertModalComponent,
    RoutingComponent,
    StaffDetailComponent,
    PageNotFoundComponent,
    DebugToolDemoComponent,
    RxjsDemoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
