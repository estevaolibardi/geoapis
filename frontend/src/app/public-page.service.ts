import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PublicPageService {
  private _publicUrl = 'http://localhost:3000/public-page';
  private _privateUrl = 'http://localhost:3000/private-page';

  constructor(private http: HttpClient) {}

  getPublic() {
    return this.http.get<any>(this._publicUrl);
  }

  getPrivate() {
    return this.http.get<any>(this._privateUrl);
  }
}
