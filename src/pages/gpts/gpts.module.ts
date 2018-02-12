import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GptsPage } from './gpts';

@NgModule({
  declarations: [
    GptsPage,
  ],
  imports: [
    IonicPageModule.forChild(GptsPage),
  ],
})
export class GptsPageModule {}
