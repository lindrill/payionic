import { Component, Input, ViewChild, OnInit, Renderer } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { FaqsPage } from '../../pages/faqs/faqs';
import { StorepoliciesPage } from '../../pages/storepolicies/storepolicies';
import { GradingquestionsPage } from '../../pages/gradingquestions/gradingquestions';
import { TermsofusePage } from '../../pages/termsofuse/termsofuse';
import { ScqiqsPage } from '../../pages/scqiqs/scqiqs';
import { PptqsPage } from '../../pages/pptqs/pptqs';
import { GptsPage } from '../../pages/gpts/gpts';
import { GrandprixPage } from '../../pages/grandprix/grandprix';

@Component({
  selector: 'expandable',
  templateUrl: 'expandable.html'
})
export class ExpandableComponent {

  @ViewChild('aa') itemList1: any;
  @ViewChild('bb') itemList2: any;
	
  expanded: boolean = false;
	comments: any[] = [];
  index: number;
  toggled1: boolean = false;
  toggled2: boolean = false;

  constructor(public renderer: Renderer, private http: Http, public navCtrl: NavController) {
    this.toggled1;
    this.toggled2;
  }

  ngOnInit() {
  	this.renderer.setElementStyle(this.itemList1.nativeElement, "webkitTransition", "max-height 500ms");
    this.renderer.setElementStyle(this.itemList2.nativeElement, "webkitTransition", "max-height 500ms");
  }

  toggleAccordion(index) {
    this.index = index;
  	if(this.expanded && index == 1) {
  		this.renderer.setElementStyle(this.itemList1.nativeElement, "max-height", "0px");
      this.toggled1 = false;
      console.log("toggled1" + this.toggled1);
  	} else if(this.expanded && index == 2) {
      this.renderer.setElementStyle(this.itemList2.nativeElement, "max-height", "0px");
      this.toggled2 = false;
      console.log("toggled2" + this.toggled2);
    } else if(this.expanded == false && index == 1) {
  		this.renderer.setElementStyle(this.itemList1.nativeElement, "max-height", "500px");
      this.toggled1 = true;
      console.log("toggled1" + this.toggled1);
  	} else if(this.expanded == false && index == 2) {
      this.renderer.setElementStyle(this.itemList2.nativeElement, "max-height", "500px");
      this.toggled2 = true;
      console.log("toggled2" + this.toggled2);
    }
  	this.expanded = !this.expanded;
  }

  faqsPage() {
    this.navCtrl.push(FaqsPage);
  }

  storePolicies() {
    this.navCtrl.push(StorepoliciesPage);
  }

  gradingQuestions() {
    this.navCtrl.push(GradingquestionsPage);
  }

  termsofUse() {
    this.navCtrl.push(TermsofusePage);
  }

  scsIqs() {
    this.navCtrl.push(ScqiqsPage);
  }

  pptQs() {
    this.navCtrl.push(PptqsPage);
  }

  gpts() {
    this.navCtrl.push(GptsPage);
  }

  grandPrix() {
    this.navCtrl.push(GrandprixPage);
  }

}
