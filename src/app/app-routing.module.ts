import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentComponent } from './parent/parent.component';
import { FormDataStreamComponent } from './form-data-stream/form-data-stream.component';

const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'formData', component: FormDataStreamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
