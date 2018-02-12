import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'socialmedia',
  templateUrl: 'socialmedia.html'
})
export class SocialmediaComponent {

  // text: string;

  constructor(public iab: InAppBrowser) {
    console.log('Hello FooterComponent Component');
    // this.text = '<p>Hello</p><ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon>';
  }

  openSocialMedia(url) {
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
