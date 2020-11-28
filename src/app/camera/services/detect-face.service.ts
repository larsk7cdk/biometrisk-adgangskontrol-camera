import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CameraPhoto } from '@capacitor/core';
import { Guid } from 'guid-typescript';
import { AccessControlResponse } from './detect-face.interfaces';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DetectFaceService {
  constructor(private httpClient: HttpClient) {}

  detectFace(
    photo: CameraPhoto,
    direction: string
  ): Observable<AccessControlResponse | HttpErrorResponse> {
    const filename = Guid.create() + '.jpg';
    const f = new File([photo.base64String], filename, { type: 'image/jpeg' });

    const formData = new FormData();
    formData.append('file', f);
    formData.append('direction', direction);

    return this.httpClient
      .post<AccessControlResponse>(environment.detectFaceUrl, formData, {
        withCredentials: false,
      })
      .pipe(
        catchError((error) => {
          return of(error);
        })
      );
  }
}
