import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CakePageRoutingModule } from './cake-routing.module';

import { CakePage } from './cake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CakePageRoutingModule
  ],
  declarations: [CakePage]
})
export class CakePageModule {}
