import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StorepoliciesPage } from './storepolicies';

@NgModule({
  declarations: [
    StorepoliciesPage,
  ],
  imports: [
    IonicPageModule.forChild(StorepoliciesPage),
  ],
})
export class StorepoliciesPageModule {}
