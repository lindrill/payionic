import { Component, ViewChild } from '@angular/core';

//components
import { SocialmediaComponent } from '../components/socialmedia/socialmedia';
import { ExpandableComponent } from '../components/expandable/expandable';
import { SearchstoreComponent } from '../components/searchstore/searchstore';
import { PaymentlogoComponent } from '../components/paymentlogo/paymentlogo';

import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//pages
import { MenuPage } from '../pages/menu/menu';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MenuPage;

  // pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    //used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Home', component: HomePage },
    //   // { title: 'List', component: ListPage },
    //   { title: 'Payment', component: PaymentPage }
    // ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


}
