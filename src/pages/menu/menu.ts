import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { StorePage } from '../store/store';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

	home: any = Component;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.home = HomePage;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad MenuPage');
  }

  storePage() {
  	this.navCtrl.push(StorePage);
  }

}
