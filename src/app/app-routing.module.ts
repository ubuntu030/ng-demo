import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentComponent } from './parent/parent.component';
import { FormDataStreamComponent } from './form-data-stream/form-data-stream.component';
import { RoutingComponent } from './routing/routing.component';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';

const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'formData', component: FormDataStreamComponent },
  { path: 'routing', component: RoutingComponent },
  { path: 'detail/:id', component: StaffDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
