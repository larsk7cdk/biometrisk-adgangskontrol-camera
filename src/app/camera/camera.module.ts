import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CameraRoutingModule } from './camera-routing.module';
import { TakePhotoComponent } from './take-photo/take-photo.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [TakePhotoComponent],
  imports: [CommonModule, CameraRoutingModule, IonicModule],
})
export class CameraModule {}
