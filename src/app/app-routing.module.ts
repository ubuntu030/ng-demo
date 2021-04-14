import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentComponent } from './parent/parent.component';
import { FormDataStreamComponent } from './form-data-stream/form-data-stream.component';
import { RoutingComponent } from './routing/routing.component';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/formData', pathMatch: 'full' },
  { path: 'parent', component: ParentComponent },
  { path: 'formData', component: FormDataStreamComponent },
  { path: 'routing', component: RoutingComponent },
  { path: 'detail/:id', component: StaffDetailComponent },
  // 萬用字元路由
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
