import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ShopPage } from '../shop/shop';
import { RecommendPage } from '../recommend/recommend';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1Root = ShopPage;
  tab2Root = RecommendPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
