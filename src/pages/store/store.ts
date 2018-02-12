import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as WC from 'woocommerce-api';
// import { Headers } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {

	featuredimages: any = [];
	WooCommerce: any;
	products: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.featuredimages = [
  		{ 'url' : 'assets/imgs/home/slides/slideimg1.jpg'},
  		{ 'url' : 'assets/imgs/home/slides/slideimg3.jpg'},
  		{ 'url' : 'assets/imgs/home/slides/slideimg3.jpg'}
  	];

  	this.WooCommerce = WC({
  		url: "http://localhost/wordpress",
  		consumerKey: "ck_e5b0a3c4e6a0b4a99007ca4f49392008eddef02d",
  		consumerSecret: "cs_14768d5cdf9edd759887edea43de9e2d9db90a26"
  	});

  	// let headers = new Headers();
  	this.WooCommerce.getAsync("products").then((data) => {
  		console.log(JSON.parse(data.body));
  		this.products = JSON.parse(data.body).products;
  	}, (err) => {
  		console.log(err);
  	})
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad StorePage');
  }

}
