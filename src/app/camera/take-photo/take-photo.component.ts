import { Component, OnInit } from '@angular/core';
import { CameraService } from '../services/camera.service';
import { DetectFaceService } from '../services/detect-face.service';
import { delay, first } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-take-photo',
  templateUrl: './take-photo.component.html',
  styleUrls: ['./take-photo.component.scss'],
})
export class TakePhotoComponent implements OnInit {
  image: Observable<string> = of('');

  constructor(
    private cameraService: CameraService,
    private detectFaceService: DetectFaceService
  ) {}

  ngOnInit() {
    this.takePhoto();
  }

  takePhoto(): void {
    this.cameraService.takePhoto().then((photo) => {
      this.image = of('./assets/images/spinner.gif');

      this.detectFaceService
        .detectFace(photo.base64String)
        .pipe(delay(2000), first())
        .subscribe((detected: boolean) => {
          if (detected) {
            this.image = of('./assets/images/checkmark.png');
          } else {
            this.image = of('./assets/images/stop.png');
          }

          setTimeout(() => {
            this.image = null;
            this.takePhoto();
          }, 3000);
        });
    });
  }
}
