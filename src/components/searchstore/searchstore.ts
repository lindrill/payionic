import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategorystorePage } from '../../pages/categorystore/categorystore';

@Component({
  selector: 'searchstore',
  templateUrl: 'searchstore.html'
})
export class SearchstoreComponent {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  categoryStore() {

  }

  categorystorePage() {
  	this.navCtrl.push(CategorystorePage);
  }

}
