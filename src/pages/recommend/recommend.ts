import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http }     from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

 import { parseString } from 'xml2js'
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-recommend',
  templateUrl: 'recommend.html'
})
export class RecommendPage {
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
    this.films = this.http.get('http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4.9&price_less_than=5')
      .map(res => res.json())
  }

  openDetails(film) {
    this.navCtrl.push(DetailPage, {film: film});
  }


}
