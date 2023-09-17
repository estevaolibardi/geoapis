import { Component, OnInit } from '@angular/core';
import { PublicPageService } from '../public-page.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.component.html',
  styleUrls: ['./private-page.component.css'],
})
export class PrivatePageComponent implements OnInit {
  privates: any = [];
  constructor(
    private _publicService: PublicPageService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._publicService.getPrivate().subscribe(
      (res) => (this.privates = res),
      // (err) => console.log(err)
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(['/login']);
          }
        }
      }
    );
  }
}
