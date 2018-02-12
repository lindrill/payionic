import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule} from '@angular/http';
import { IonicImageViewerModule } from 'ionic-img-viewer';

//components
import { MyApp } from './app.component';
import { SocialmediaComponent } from '../components/socialmedia/socialmedia';
import { ExpandableComponent } from '../components/expandable/expandable';
import { SearchstoreComponent } from '../components/searchstore/searchstore';
import { PaymentlogoComponent } from '../components/paymentlogo/paymentlogo';

//pages
import { HomePage } from '../pages/home/home';
import { StorePage } from '../pages/store/store';
import { CategorystorePage } from '../pages/categorystore/categorystore';
import { PaymentPage } from '../pages/payment/payment';
import { MenuPage } from '../pages/menu/menu';
import { SearchstorePage } from '../pages/searchstore/searchstore';

//footer pages
import { FaqsPage } from '../pages/faqs/faqs';
import { StorepoliciesPage } from '../pages/storepolicies/storepolicies';
import { GradingquestionsPage } from '../pages/gradingquestions/gradingquestions';
import { TermsofusePage } from '../pages/termsofuse/termsofuse';
import { ScqiqsPage } from '../pages/scqiqs/scqiqs';
import { PptqsPage } from '../pages/pptqs/pptqs';
import { GptsPage } from '../pages/gpts/gpts';
import { GrandprixPage } from '../pages/grandprix/grandprix';

//plugins
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PayPal } from '@ionic-native/paypal';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StorePage,
    MenuPage,
    PaymentPage,
    CategorystorePage,
    FaqsPage,
    StorepoliciesPage,
    GradingquestionsPage,
    TermsofusePage,
    ScqiqsPage,
    PptqsPage,
    GptsPage,
    GrandprixPage,
    SearchstorePage,
    SocialmediaComponent,
    ExpandableComponent,
    SearchstoreComponent,
    PaymentlogoComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StorePage,
    MenuPage,
    PaymentPage,
    CategorystorePage,
    FaqsPage,
    StorepoliciesPage,
    GradingquestionsPage,
    TermsofusePage,
    ScqiqsPage,
    PptqsPage,
    GptsPage,
    GrandprixPage,
    SearchstorePage,
    SocialmediaComponent,
    ExpandableComponent,
    SearchstoreComponent,
    PaymentlogoComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PayPal,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
