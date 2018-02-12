import { NgModule } from '@angular/core';
import { SocialmediaComponent } from './socialmedia/socialmedia';
import { ExpandableComponent } from './expandable/expandable';
import { SearchstoreComponent } from './searchstore/searchstore';
import { PaymentlogoComponent } from './paymentlogo/paymentlogo';
import { ImageslidesComponent } from './imageslides/imageslides';
@NgModule({
	declarations: [SocialmediaComponent,
    ExpandableComponent,
    SearchstoreComponent,
    PaymentlogoComponent,
    ImageslidesComponent],
	imports: [],
	exports: [SocialmediaComponent,
    ExpandableComponent,
    SearchstoreComponent,
    PaymentlogoComponent,
    ImageslidesComponent]
})
export class ComponentsModule {}
