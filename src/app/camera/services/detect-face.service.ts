import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { CameraPhoto } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class DetectFaceService {
  constructor(private httpClient: HttpClient) {}

  detectFace(photo: CameraPhoto): Observable<boolean> {
    const f = new File([photo.base64String], 'foo.jpg', { type: 'image/jpeg' });

    const formData = new FormData();
    formData.append('file', f);

    this.httpClient.post<any>(environment.detectFaceUrl, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );

    // .pipe(
    //   map((_) => {
    //     return true;
    //   })
    // );

    return of(true);
  }
}
