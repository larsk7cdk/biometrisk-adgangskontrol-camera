import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DetectFaceService {
  constructor(private httpClient: HttpClient) {}

  detectFace(photo: string): Observable<boolean> {
    const formData = new FormData();
    formData.append('file', photo);

    // return this.httpClient.post(environment.detectFaceUrl, formData);

    return of(true);
  }
}
