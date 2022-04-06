import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MacaroonPageRoutingModule } from './macaroon-routing.module';

import { MacaroonPage } from './macaroon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MacaroonPageRoutingModule
  ],
  declarations: [MacaroonPage]
})
export class MacaroonPageModule {}
