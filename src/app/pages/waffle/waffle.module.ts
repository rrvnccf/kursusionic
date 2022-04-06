import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WafflePageRoutingModule } from './waffle-routing.module';

import { WafflePage } from './waffle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WafflePageRoutingModule
  ],
  declarations: [WafflePage]
})
export class WafflePageModule {}
