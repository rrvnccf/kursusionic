import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WafflePage } from './waffle.page';

const routes: Routes = [
  {
    path: '',
    component: WafflePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WafflePageRoutingModule {}
