import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http }     from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

 import { parseString } from 'xml2js'
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {
  // We proxied rssUrl to http://bbs.cloud.icybee.cn/rss/

  // for `ionic serve`
  // private readonly rssUrl = '/rss/board-Picture'

  // for `electron .`
  // private readonly rssUrl = 'http://bbs.cloud.icybee.cn/rss/board-Picture'

  films: Observable<any>;

  public posts: Object[] = []

  constructor(
    public http:    Http,
    public navCtrl: NavController,
  ) {

  }

  ngOnInit() {
    this.films = this.http.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=pacifica')
      .map(res => res.json())
  }

  openDetails(film) {
    this.navCtrl.push(DetailPage, {film: film});
  }


}
