import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RollCakePageRoutingModule } from './roll-cake-routing.module';

import { RollCakePage } from './roll-cake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RollCakePageRoutingModule
  ],
  declarations: [RollCakePage]
})
export class RollCakePageModule {}
