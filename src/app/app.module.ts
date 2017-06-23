import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { DetailPage } from '../pages/detail/detail';
import { ShopPage } from '../pages/shop/shop';
import { RecommendPage } from '../pages/recommend/recommend';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HTTP } from '@ionic-native/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    DetailPage,
	ShopPage,
	RecommendPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    DetailPage,
	ShopPage,
	RecommendPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // HTTP,
  ]
})
export class AppModule {}
