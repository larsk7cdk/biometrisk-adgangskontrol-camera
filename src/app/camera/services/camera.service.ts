import { Injectable } from '@angular/core';
import {
  Plugins,
  CameraResultType,
  CameraSource,
  CameraPhoto,
} from '@capacitor/core';

const { Camera } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  constructor() {}

  public async takePhoto(): Promise<CameraPhoto> {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      quality: 100,
    });

    return capturedPhoto;
  }
}
