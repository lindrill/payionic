import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'imageslides',
  templateUrl: 'imageslides.html'
})
export class ImageslidesComponent {

	@ViewChild(Slides) slides: Slides;

	slidesImgArray: any = [];

  constructor() {
  	this.slidesImgArray = [
  		{ 'url' : 'assets/imgs/home/slides/slideimg1.jpg'},
  		{ 'url' : 'assets/imgs/home/slides/slideimg3.jpg'}
  	];
  }

}
