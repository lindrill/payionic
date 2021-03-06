import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }
  constructor(public navCtrl: NavController, public navParams: NavParams, private payPal: PayPal) { }

  makePayment() {
		this.payPal.init({
		  PayPalEnvironmentProduction: '',
		  PayPalEnvironmentSandbox: 'Ac1OSz7DouCoUflM9YGJ7ZvmCa0eo_ExnfJVduxiGYLa6ewB3SgPhxT8SvWsufBeascPhJ572TwiLneN'
		}).then(() => {
		  // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
		  this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
			// Only needed if you get an "Internal Service Error" after PayPal login!
			//payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
		  })).then(() => {
			let payment = new PayPalPayment('3.33', 'USD', 'Iten 123456', 'sale');
			this.payPal.renderSinglePaymentUI(payment).then(() => {
			  // Successfully paid

			  // Example sandbox response
			  //
			  // {
			  //   "client": {
			  //     "environment": "sandbox",
			  //     "product_name": "PayPal iOS SDK",
			  //     "paypal_sdk_version": "2.16.0",
			  //     "platform": "iOS"
			  //   },
			  //   "response_type": "payment",
			  //   "response": {
			  //     "id": "PAY-1AB23456CD789012EF34GHIJ",
			  //     "state": "approved",
			  //     "create_time": "2016-10-03T13:33:33Z",
			  //     "intent": "sale"
			  //   }
			  // }
			}, () => {
			  // Error or render dialog closed without being successful
			});
		  }, () => {
			// Error in configuration
		  });
		}, () => {
		  // Error in initialization, maybe PayPal isn't supported or something else
		});
	}

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad PaymentPage');
  // }

}
