import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MacaroonPage } from './macaroon.page';

const routes: Routes = [
  {
    path: '',
    component: MacaroonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MacaroonPageRoutingModule {}
