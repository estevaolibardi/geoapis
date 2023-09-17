import { Component, OnInit } from '@angular/core';
import { PublicPageService } from '../public-page.service';

@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.css'],
})
export class PublicPageComponent implements OnInit {
  publics: any = [];
  constructor(private _publicService: PublicPageService) {}

  ngOnInit(): void {
    this._publicService.getPublic().subscribe(
      (res) => (this.publics = res),
      (err) => console.log(err)
    );
  }
}
