import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakePhotoComponent } from './take-photo/take-photo.component';

const routes: Routes = [
  {
    path: '',
    component: TakePhotoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CameraRoutingModule {}
