import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { StorePage } from '../store/store';
import { SearchstorePage } from '../searchstore/searchstore';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild(Slides) slides: Slides;

	slidesImgArray: any = [];
  recentArticles: any = [];
  // itemExpanded: boolean = false;
  // itemExpandedHeight: number = 200;

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {
  	this.slidesImgArray = [
  		{ 'url' : 'assets/imgs/home/slides/slideimg1.jpg'},
  		{ 'url' : 'assets/imgs/home/slides/slideimg3.jpg'}
  	];
    this.recentArticles = [
      { 'title' : 'Dont Know What To Do', 'content' : 'Ive had a pretty messed up day. If we just...' },
      { 'title' : 'Sale sale sale', 'content' : 'The British use the term "header", but the...' },
      { 'title' : 'New Arrivals', 'content' : 'Ive had a pretty messed up day. If we just...' },
      { 'title' : 'Event Coming Soon', 'content' : 'Ive had a pretty messed up day. If we just...' }
    ];
  }

  storePage() {
    this.navCtrl.push(StorePage);
  }

  searchStore() {
    this.navCtrl.push(SearchstorePage);
  }

  openArticlesWebpage(url) {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }

    // Opening a URL and returning an InAppBrowserObject
    const browser = this.iab.create(url, '_self', options);
    // browser.open();
   // Inject scripts, css and more with browser.X
   // browser.on('').subscribe()
  }
}
